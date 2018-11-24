class CreateBuyData < ActiveRecord::Migration[5.2]
  def change
    create_table :buy_data do |t|
      t.integer :cart_item_id, foreign_key: true
      t.string :buy_name
			t.text :buy_item_image_id
      t.integer :buy_price
			t.date :buy_release_date
      t.text :buy_opinion
			t.integer :buy_quantity
			t.datetime :buy_ordered_at
      t.timestamps
    end
  end
end
