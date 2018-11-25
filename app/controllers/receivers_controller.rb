class ReceiversController < ApplicationController
  def show
  	@receivers = current_user.receivers.page(params[:page])
    @user = User.find(params[:user_id])
  end

  def new
  	@receiver = current_user.receivers.build
  end

  def create
  	@receiver = current_user.receivers.build(receiver_params)
  	@receiver.save
  	redirect_to root_path
  end

  def edit
  	@receiver = Receiver.find(params[:id])
  end

  def update
  	@receiver = Receiver.find(params[:id])
  	@receiver.update(receiver_params)
  	redirect_to receivers_path
  end

  def destroy
  	@receiver = Receiver.find(params[:id])
  	@receiver.destroy
  	redirect_to receivers_path
  end

  private
  def receiver_params
  	params.require(:receiver).permit(:receiver_name,
  																	 :receiver_post_code,
  																	 :receiver_address,
																	 	 :receiver_phone_number, )
  end
end
