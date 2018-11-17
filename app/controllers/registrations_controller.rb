class RegistrationsController < Devise::RegistrationsController
	def after_sign_up_path_for(resource)
    Cart.create(user_id: current_user.id)
    Receiver.create(user_id: current_user.id,
    					receiver_name: current_user.name,
    		 receiver_post_code: current_user.post_code,
    			 receiver_address: current_user.address,
    	receiver_phone_number: current_user.phone_number)
    root_path
  end
end
