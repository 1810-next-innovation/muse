class ReceiversController < ApplicationController
  def index
		@user = current_user
  	@receivers = current_user.receivers.page(params[:page])
  end

  def new
		@user = current_user
  	@receiver = current_user.receivers.build
  end

  def create
  	@receiver = current_user.receivers.build(receiver_params)
  	@receiver.save
  	redirect_to user_receivers_path(current_user)
  end

  def edit
		@user = current_user
  	@receiver = Receiver.find(params[:id])
  end

  def update
  	@receiver = Receiver.find(params[:id])
  	@receiver.update(receiver_params)
  	redirect_to user_receivers_path(current_user)
  end

  def destroy
  	@receiver = Receiver.find(params[:id])
  	@receiver.destroy
  	redirect_to user_receivers_path(current_user)
  end

  private
  def receiver_params
  	params.require(:receiver).permit(:receiver_name,
  																	 :receiver_post_code,
  																	 :receiver_address,
																	 	 :receiver_phone_number,)
  end
end
