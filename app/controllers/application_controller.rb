class ApplicationController < ActionController::Base
	before_action :authenticate_user!
	before_action :configure_permitted_parameters, if: :devise_controller?

	protect_from_forgery with: :exception

	helper_method :current_cart

	def current_cart
		if current_user.carts.nil?
			@cart = Cart.create(user_id: current_user.id)
		else
			# carts = Cart.where(user_id: current_user.id)
			# @cart = carts.last
			@cart = current_user.carts.last
		end
	end

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :japanese_syllabaries, :post_code, :address, :phone_number, :birthday, :gender])
  end
end
