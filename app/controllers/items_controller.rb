class ItemsController < ApplicationController
	def top
	end

	def about
	end

	def show
	end

	def new
		@item = Item.new
	end

	def create
		item = Item.new(item_params)
		item.save
		redirect_to items_path
	end

	def index
	end

	private
	def item_params
  		params.require(:item).permit(:item_name, :stock, :opinion, :price)
    end
end
