class CreateDiscsAndMusicNames < ActiveRecord::Migration[5.2]
  def change
    create_table :discs_music_names, id: false do |t|
    	t.belongs_to :disc,       index: true
    	t.belongs_to :music_name, index: true
    end
  end
end
