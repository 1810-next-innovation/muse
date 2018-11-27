class OrdersController < ApplicationController
  before_action :stock_or_empty_check, only: [:new, :create]

  def index
  	@orders = current_user.orders.page(params[:page]).reverse_order
  end

  def index_all
    @orders = Order.page(params[:page])
  end

  def update_status
    order = Order.find(params[:id])
    order.status = params[:order][:status]
    order.save
    redirect_to orders_all_path
  end

	def show
		@order = Order.find(params[:id])
		@cart_items = @order.cart.cart_items.page(params[:page])
	end

  def new
  	@order = current_cart.build_order
    @receivers = current_user.receivers.all
    @cart_items = current_cart.cart_items.all
    sub_total_arry = @cart_items.map { |a| a.item.price * a.quantity }
    @grand_total = sub_total_arry.inject(:+)
  end

  def create
  	@order = current_cart.build_order(order_params)
    @receivers = current_user.receivers.all
		@cart_items = current_cart.cart_items.all
    sub_total_arry = @cart_items.map { |a| a.item.price * a.quantity } #小計の配列
    @grand_total = sub_total_arry.inject(:+) #総計は、小計の配列の要素の和
  	if @order.save
			flash[:success] = "Thank you for your purchase!"

			#buy_datumのレコードを追加
			current_cart.cart_items.each do |cart_item|
	      buy_datum = cart_item.build_buy_datum
	      buy_datum.buy_name = cart_item.item.item_name
	      buy_datum.buy_item_image_id = cart_item.item.item_image_id
				buy_datum.buy_price = cart_item.item.price
				buy_datum.buy_release_date = cart_item.item.release_date
				buy_datum.buy_opinion = cart_item.item.opinion
				buy_datum.buy_quantity = cart_item.quantity
				buy_datum.buy_ordered_at = cart_item.created_at
	      buy_datum.save

				cart_item.item.stock -= cart_item.quantity #購入された商品の在庫を減らす
				cart_item.item.save
	    end

			#monthly_salesを更新
			buy_data = BuyDatum.where(buy_ordered_at: 1.month.ago..Time.now)
			item_id_uniq = buy_data.map{|a| a.cart_item.item_id}.uniq
			monthly_sales_data = item_id_uniq.map do |c|
			  {item_id: c,
			   buy_quantity_total: buy_data.select{|a| a.cart_item.item_id == c}
			         								 .map{|a| a.buy_quantity}.inject(:+)
			  }
			end
			monthly_sales_data.each do |m|
				item = Item.find(m[:item_id])
				item.monthly_sales = m[:buy_quantity_total]
				item.save
			end

      #weekly_salesを更新
      buy_data = BuyDatum.where(buy_ordered_at: 1.week.ago..Time.now)
      item_id_uniq = buy_data.map{|a| a.cart_item.item_id}.uniq
      weekly_sales_data = item_id_uniq.map do |c|
        {item_id: c,
         buy_quantity_total: buy_data.select{|a| a.cart_item.item_id == c}
                               .map{|a| a.buy_quantity}.inject(:+)
        }
      end
      weekly_sales_data.each do |m|
        item = Item.find(m[:item_id])
        item.weekly_sales = m[:buy_quantity_total]
        item.save
      end

			#新しくカートを作成
	    Cart.create(user_id: current_user.id)
	  	redirect_to user_orders_path(current_user)

		else
			render "/orders/new"
		end

  end

  def stock_or_empty_check #在庫がない商品がある場合、カートに何も入っていない場合は購入できないようにする
    if current_cart.cart_items.any? { |n| n.item.stock == 0 } #在庫がない商品がある場合
      flash[:danger] = "There was a item out of stock"
      redirect_back(fallback_location: cart_path(current_cart))
    elsif current_cart.cart_items.empty? #カートに何も入っていない場合
      flash[:danger] = "There is nothing in the cart"
      redirect_back(fallback_location: cart_path(current_cart))
    end
  end

  private
  def order_params
  	params.require(:order).permit(:grand_total,
                                  :payment_method,
                                  :receiver_id)
  end
end
