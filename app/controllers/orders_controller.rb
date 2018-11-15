class OrdersController < ApplicationController
  def index
  	@orders = current_user.orders.all
  end

  def show
  	@order = current_user.orders.find(params[:id])
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
    order[:user_id] = current_user.id
  	order.save
    current_cart.cart_items.each do |cart_item|
      cart_item[:buy_price] = cart_item.item.price
      cart_item.save
    end
    Cart.create(user_id: current_user.id) #新しくカートを作成
  	redirect_to orders_path
  end

  private
  def order_params
  	params.require(:order).permit(:grand_total,
                                  :payment_method,
                                  :receiver_id)
  end
end
