class CreateDiscsAndMusicNames < ActiveRecord::Migration[5.2]
  def change
  	# create_table :discs do |t|
  	# 	t.string :disc_name
  	# 	t.timestamps
  	# end

  	# create_table :music_names do |t|
  	# 	t.string :music_name
  	# 	t.timestamps
  	# end

    create_table :discs_music_names, id: false do |t|
    	t.belongs_to :disc,       index: true
    	t.belongs_to :music_name, index: true
    end
  end
end
