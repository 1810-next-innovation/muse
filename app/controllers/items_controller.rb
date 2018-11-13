class ItemsController < ApplicationController
	def top
	end

	def about
	end

	def show
		@item = Item.find(params[:id])
		if @cart_item.blank?
  		@cart_item = current_cart.cart_items.build(item_id: params[:item_id])
  	end
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

	private
		def item_params
	  	params.require(:item).permit(:item_name, :price, :stock, :opinion)
	  end
end
