class OrdersController < ApplicationController
  before_action :stock_or_empty_check, only: [:new, :create]

  def index
  	@orders = current_user.orders.page(params[:page]).reverse_order
  end

  def index_all
    @orders = Order.page(params[:page]).reverse_order
  end

  def update_status
    order = Order.find(params[:id])
    order.status = params[:order][:status]
    order.save
    redirect_to orders_all_path
  end

  def new
  	@order = current_cart.build_order

    @receivers = current_user.receivers.all

    @cart_items = current_cart.cart_items.all
    sub_total_arry = @cart_items.map { |a| a.item.price * a.quantity }
    @grand_total = sub_total_arry.inject(:+)
  end

  def create
  	order = current_cart.build_order(order_params)
    order.user_id = current_user.id
  	if order.save
			flash[:success] = "Thank you for your purchase!"
			redirect_to root_path
		else
			render "/orders/new"
		end

    current_cart.cart_items.each do |cart_item|
      buy_datum = cart_item.build_buy_datum #buy_datumのレコードを追加
      buy_datum.buy_name = cart_item.item.item_name
      buy_datum.buy_item_image_id = cart_item.item.item_image_id
			buy_datum.buy_price = cart_item.item.price
			buy_datum.buy_release_date = cart_item.item.release_date
			buy_datum.buy_opinion = cart_item.item.opinion
      buy_datum.save

			cart_item.item.stock -= cart_item.quantity #購入された商品の在庫を減らす
			cart_item.item.save
    end

    Cart.create(user_id: current_user.id) #新しくカートを作成
  	redirect_to orders_path
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
