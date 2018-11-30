class GenresController < ApplicationController
	# before_action :admin_user

  def new
  	@genre = Genre.new
    @genres = Genre.all
  end

  def create
  	@genre = Genre.new(genre_params)
  	@genre.save
  	redirect_to new_item_path
  end

  def destroy
    @genre = Genre.find(params[:id])
    @genre.destroy
    redirect_to new_item_path
  end

	private

	def genre_params
  	params.require(:genre).permit(:genre_name)
  end
end
