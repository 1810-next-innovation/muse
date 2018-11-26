class UsersController < ApplicationController
	before_action :authenticate_user!

	before_action :admin_user,     only: [:index]
	before_action :correct_user,     only: [:show, :edit, :update]
	


	def index
		@users = User.search(params[:search])
	end

	def show
		@user = User.find(params[:id])
	end

	def edit
		@user = User.find(params[:id])
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
		redirect_to users_path
	end

	def update
    @user = User.find(params[:id])
    @user.update(user_params)
    redirect_to user_path(@user.id)
	end

	def receiver
		@user = User.find(params[:id])
	end

	def editr
		@user = User.find(params[:id])
	end

	private

	

     def correct_user
        @user = User.find(params[:id])
        unless current_user.admin? || current_user == @user
        redirect_to root_path
        end
     end

	def admin_user
        redirect_to(root_url) unless current_user.admin?
    end

	def user_params
		params.require(:user).permit(:name, :japanese_syllabaries, :gender, :post_code, :address, :phone_number, :email, :birthday, :reviewer_name,
																	receivers_attributes: [:id, :receiver_name, :receiver_post_code, :receiver_address, :receiver_phone_number, :_destroy])
	end
end
