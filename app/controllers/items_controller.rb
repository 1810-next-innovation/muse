class ItemsController < ApplicationController
	
	def top
	end

	def about
	end

	def show
		@item = Item.find(params[:id])
		if @cart_item.blank?
			puts current_cart.nil?
  		# @cart_item = current_cart.cart_items.build(item_id: params[:item_id])
  		@review = Review.new 
        @reviews = @item.reviews
  	end
	end

	def new
		@item = Item.new

		@labels = Label.all
	end

	def create
		@item = Item.new(item_params)
		if @item.save
			@items = Item.search(params[:search])

			@items = @items.page(params[:page])

			render :index
		else
		@labels = Label.all
			render :new
		end
	end

	def index
		@items = Item.search(params[:search])

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
  	params.require(:item).permit(:item_name, :item_image, :price, :stock, :opinion, :label_id, )
  end
end
