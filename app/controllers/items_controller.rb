class ItemsController < ApplicationController

	def top
		item_in_order_of_sales = Item.all.sort_by{ |k, v| k.monthly_sales }.reverse
		@items = item_in_order_of_sales.take(5)
	end

	def about
	end

	def show
		@item = Item.find(params[:id])

		if @cart_item.blank?
			@cart_item = current_cart.cart_items.build(item_id: params[:item_id])
		end

		@review = Review.new
		@reviews = @item.reviews

		if current_cart.cart_items.find_by(item_id: @item.id)
			@cart_item_quantity = current_cart.cart_items.find_by(item_id: @item.id).quantity
		else
			@cart_item_quantity = 0
		end

	end

	def new
		@item = Item.new

		@label = Label.new

		@labels = Label.all

		@disc = @item.discs.build
		@music_name = @disc.music_names.build
	end

	def create
		@item = Item.new(item_params)
		if @item.save
			@items = Item.search(params[:search])

			@items = @items.page(params[:page])

			render :index
		else
		@labels = Label.all
		@label = Label.new
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
  	params.require(:item).permit(:item_name, :item_image, :price, :stock, :release_date, :opinion, :label_id,	discs_attributes: [:id, :disc_name, :_destroy,
  																																																						music_names_attributes: [:id, :music_name, :_destroy]])
  end
end
