class ArtistsController < ApplicationController
  def new
  	@artist = Artist.new
    @artist = Artist.all
  end

  def create
  	@artist = Artist.new(artist_params)
  	@artist.save
  	redirect_to new_item_path
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to new_item_path
  end

private
	def artist_params
  	params.require(:artist).permit(:artist_name)
  end
end
