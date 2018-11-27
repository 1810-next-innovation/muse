class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :label_id
      t.integer :artist_id
      t.integer :genre_id
      t.string :item_name
      t.text :item_image_id
      t.integer :price
      t.date :release_date
      t.text :opinion
      t.integer :stock
			t.integer :monthly_sales, default: 0

      t.timestamps
    end
  end
end
