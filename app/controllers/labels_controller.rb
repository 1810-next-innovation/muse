class LabelsController < ApplicationController
  def new
  	@label = Label.new
    @labels = Label.all
  end

  def create
  	@label = Label.new(label_params)
  	@label.save


    @item = Item.new

    @labels = Label.all

    @artist = Artist.new
    @artists = Artist.all

    @genre = Genre.new
    @genres = Genre.all

    @disc = @item.discs.build
    @music_name = @disc.music_names.build


  	render "items/new"
  end

  def destroy
    @label = Label.find(params[:id])
    @label.destroy
    redirect_to new_item_path
  end

private
	def label_params
  	params.require(:label).permit(:label_name)
  end

end
