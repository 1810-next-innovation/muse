class OrdersController < ApplicationController
  def index
  	@orders = Order.all
  end

  def show
  	@order = current_user.orders.find(params[:id])
  end

  def new
  	@order = current_cart.orders.build
  end

  def create
  	order = current_user.orders.build(order_params)
  	order.save
  	redirect_to root_path
  end

  private
  def order_params
  	params.require(:order).permit(:cart_id,
  																:grand_total,
  																:paymemt_method,
  																:receiver_id,
  																:status)
  end
end
