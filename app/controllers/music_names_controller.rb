class MusicNamesController < ApplicationController
	def create
		@music_name = @item.music_names.build(music_name_params)
		if music_name.save
			flash[:success] = "曲名を追加しました"
			redirect_back(fallback_location: root_url)
		else
			render "item_new_path"
		end
	end

	def update
		music_name = MusicName.find()
	end

	def destroy
		music_name.destroy
		flash[:success] = "曲名を削除しました"
		redirect_back(fallback_location: root_url)
	end

	private
		def music_name_params
			params.require(:music_name).permit(:music_name,
																				 :disc_id,
																				 :artist_id,
																				 :genre_id)
		end
end
