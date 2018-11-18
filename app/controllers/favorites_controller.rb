class FavoritesController < ApplicationController
	before_action :current_user



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
		    item = Item.find(params[:item_id])
            favorite = current_user.favorites.find_by(item_id: item.id)
            favorite.destroy
            redirect_to item_path(item)
	end
end
