 class FavoritesController < ApplicationController
	before_action :authenticate_user!
	before_action :correct_user_favorite, only: [:show]

	def show
		@user = User.find(params[:user_id])
		@favorites = Favorite.where("user_id = ?", @user)
  end

	def create
		item = Item.find(params[:item_id])
    favorite = current_user.favorites.new(item_id: item.id)
    favorite.save
    redirect_to item_path(item)
	end

	def destroy
		binding.pry
		item = Item.find(params[:item_id])
    favorite = current_user.favorites.find_by(item_id: item.id)
    favorite.destroy
    redirect_to item_path(item)
	end

	private

	def correct_user_favorite
		unless user_signed_in? && params[:user_id].to_i == current_user.id
			flash[:alert] = "You don't have permission"
			redirect_to root_path
			return
		end
	end
end
