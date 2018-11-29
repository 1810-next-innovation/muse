class CartsController < ApplicationController
	before_action :correct_user
  before_action :setup_cart_item!, only:[:add_item, :update_item, :delete_item]

  def show
  	@cart_items = current_cart.cart_items.page(params[:page])
    @grand_total = @cart_items.map { |a| a.item.price * a.quantity }.inject(:+)
  end

  def add_item
  	if @cart_item.blank?
  		@cart_item = current_cart.cart_items.build(item_id: params[:item_id])
  	end
  	@cart_item.quantity += params[:cart_item][:quantity].to_i
  	@cart_item.save
  	redirect_to user_cart_path(current_user, current_cart)
  end

  def update_item
    cart_item = CartItem.find(params[:id])
    cart_item.quantity = params[:cart_item][:quantity].to_i
  	cart_item.save
  	redirect_to user_cart_path(current_user, current_cart)
  end

  def delete_item
    cart_item = CartItem.find(params[:id])
  	cart_item.destroy
  	redirect_to user_cart_path(current_user, current_cart)
  end

  private

  def setup_cart_item!
  	@cart_item = current_cart.cart_items.find_by(item_id: params[:item_id])
  end
end
