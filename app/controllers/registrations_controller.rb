class RegistrationsController < Devise::RegistrationsController
	def after_sign_up_path_for(resource)
    Cart.create(user_id: current_user.id)
    root_path
  end
end
