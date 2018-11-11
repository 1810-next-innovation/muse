class CreateMusicNames < ActiveRecord::Migration[5.2]
  def change
    create_table :music_names do |t|
      t.integer :artist_id
      t.integer :genre_id
      t.string :music_name

      t.timestamps
    end
  end
end
