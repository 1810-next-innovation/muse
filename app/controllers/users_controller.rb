class UsersController < ApplicationController
	# before_action :admin_user, only: [:index, :destroy]
	# before_action :correct_user, only: [:show, :receivers, :edit, :edit_receivers, :update]

	before_action :set_user, only: [:show, :receivers, :edit, :edit_receivers, :update, :destroy]

	def index
		@users = User.search(params[:search])
	end

	def show
	end

	def receivers
	end

	def edit
	end

	def edit_receivers
	end

	def update
		path = Rails.application.routes.recognize_path(request.referer)

		if @user.update(user_params)
			redirect_to user_path(@user.id)
		else
			if path[:edit]
				render :edit
			else path[:edit_receivers]
				render :edit_receivers
			end
		end
	end

	def destroy
		@user.destroy
		redirect_to root_path
	end

	private

	def set_user
		@user = User.find(params[:id])
	end

	def user_params
		params.require(:user).permit(:name, :japanese_syllabaries, :gender, :post_code, :address, :phone_number, :email, :birthday, :reviewer_name,
																	receivers_attributes: [:id, :receiver_name, :receiver_post_code, :receiver_address, :receiver_phone_number, :_destroy])
	end
end
