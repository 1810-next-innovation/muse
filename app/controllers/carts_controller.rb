class CartsController < ApplicationController
	before_action :correct_user_cart, only: [:show]
  before_action :set_cart_item, only: [:update_cart_item, :delete_cart_item]

  def show
  	@cart_items = current_cart.cart_items.page(params[:page])
    @grand_total = @cart_items.map { |a| a.item.price * a.quantity }.inject(:+)
  end

  def add_cart_item
		@cart_item = current_cart.cart_items.find_by(item_id: params[:item_id])
  	if @cart_item.blank?
  		@cart_item = current_cart.cart_items.build(item_id: params[:item_id])
  	end
  	@cart_item.quantity += cart_item_params[:quantity].to_i
  	@cart_item.save
  	redirect_to user_cart_path(current_user, current_cart)
  end

  def update_cart_item
    @cart_item.update!(cart_item_params)
  	@cart_item.save
  	redirect_to user_cart_path(current_user, current_cart)
  end

  def delete_cart_item
  	@cart_item.destroy
  	redirect_to user_cart_path(current_user, current_cart)
  end

  private

	def correct_user_cart
		unless user_signed_in? &&
			 		 params[:user_id].to_i == current_user.id &&
					 params[:id].to_i == current_cart.id
			flash[:alert] = "You don't have permission"
			redirect_to root_path
			return
		end
	end

  def set_cart_item
  	@cart_item = current_cart.cart_items.find(params[:id])
		if @cart_item.nil?
			flash[:alert] = "You don't have permission"
			redirect_to root_path
			return
		end
  end

	def cart_item_params
		params.require(:cart_item).permit(:quantity)
	end
end
