class ApplicationController < ActionController::Base
	before_action :configure_permitted_parameters, if: :devise_controller?

	protect_from_forgery with: :exception

	helper_method :current_cart

	def current_cart
		@cart = current_user.carts.last
	end

  private

	def admin_user
		unless user_signed_in? && current_user.admin?
			flash[:alert] = "You don't have permission"
			redirect_to root_path
			return
		end
	end

	def correct_user
		unless user_signed_in? && params[:id].to_i == current_user.id
			flash[:alert] = "You don't have permission"
			redirect_to root_path
			return
		end
	end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :japanese_syllabaries, :post_code, :address, :phone_number, :birthday, :gender])
  end
end
