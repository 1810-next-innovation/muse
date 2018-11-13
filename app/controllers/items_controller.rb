class ItemsController < ApplicationController
	
	def top
	end

	def about
	end

	def show
		@item = Item.find(params[:id])
	end

	def new
		@item = Item.new
	end

	def create
		item = Item.new(item_params)
		if item.save
			redirect_to items_path
		else
			render "/items/new"
		end
	end

	def index
		@items = Item.all
		@items = @items.page(params[:page])
	end

	def edit
		@item = Item.find(params[:id])
	end

	def update
		item = Item.find(params[:id])
		item.update(item_params)
		redirect_to item_path(item.id)
	end

	def destroy
		@item = Item.find(params[:id])
		@item.destroy
		redirect_to items_path
	end

private
	def item_params
  	params.require(:item).permit(:item_name, :item_image, :price, :stock, :opinion )
  end
end
