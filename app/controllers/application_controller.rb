class ApplicationController < ActionController::Base
	# before_action :configure_permitted_parameters, if: :devise_controller?

	protect_from_forgery with: :exception

	helper_method :current_cart

	def current_cart
		@cart = current_user.carts.last
	end

  private

	def admin_user
		flash[:alert] = "You don't have permission"
		unless user_signed_in? && current_user.admin?
			redirect_to(root_url)
			return
		end
	end

	def correct_user
		flash[:alert] = "You don't have permission"
		if params[:user_id] != nil
			@user = User.find(params[:user_id])
		else
			@user = User.find(params[:id])
		end
		unless user_signed_in? && @user == current_user
			redirect_to root_path
			return
		end
	end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :japanese_syllabaries, :post_code, :address, :phone_number, :birthday, :gender])
  end
end
