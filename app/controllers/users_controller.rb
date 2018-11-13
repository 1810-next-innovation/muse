class UsersController < ApplicationController

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


	private 

	def user_params
		params.require(:user).permit(:name, :japanese_syllabaries, :gender, :post_code, :address, :phone_number, :email, :birthday)
	end







end
