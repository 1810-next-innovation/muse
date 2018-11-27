class ItemsController < ApplicationController

	def top
		item_in_order_of_sales = Item.all.sort_by{ |k, v| k.monthly_sales }.reverse
		@items = item_in_order_of_sales.take(5)
	end

	def about
	end

	def show
		@item = Item.find(params[:id])

		@review = Review.new
		@reviews = @item.reviews

		if user_signed_in? && !current_user.admin?
			if @cart_item.blank?
				@cart_item = current_cart.cart_items.build(item_id: params[:item_id])
			end

			if current_cart.cart_items.find_by(item_id: @item.id)
				@cart_item_quantity = current_cart.cart_items.find_by(item_id: @item.id).quantity
			else
				@cart_item_quantity = 0
			end
		end
	end

	def new
		@item = Item.new

		@label = Label.new
		@labels = Label.all

		@artist = Artist.new
		@artists = Artist.all

		@genre = Genre.new
		@genres = Genre.all

		@disc = @item.discs.build
		@music_name = @disc.music_names.build
	end

	def create
		@item = Item.new(item_params)
		if @item.save
			redirect_to items_path
		else
		@label = Label.new
		@labels = Label.all

		@artist = Artist.new
		@artists = Artist.all

		@genre = Genre.new
		@genres = Genre.all
			render :new
		end
	end

	def index
		@items = Item.search(params[:search])

		@items = @items.page(params[:page])
	end

	def edit
		@item = Item.find(params[:id])
		@labels = Label.all
		@artists = Artist.all
		@genres = Genre.all
	end

	def update
		@item = Item.find(params[:id])
		@item.update(item_params)
		redirect_to item_path(@item.id)
	end

	def destroy
		@item = Item.find(params[:id])
		@item.destroy
		redirect_to items_path
	end

private
	def item_params
  	params.require(:item).permit(:label_id, :artist_id, :genre_id, :item_name, :item_image, :price, :stock, :release_date, :opinion,
  															 discs_attributes: [:id, :disc_name, :_destroy,
  															 music_names_attributes: [:id, :music_name, :artist_id, :genre_id, :_destroy]])
  end
end
