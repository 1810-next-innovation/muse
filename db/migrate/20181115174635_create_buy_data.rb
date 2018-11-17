class CreateBuyData < ActiveRecord::Migration[5.2]
  def change
    create_table :buy_data do |t|
      t.integer :cart_item_id, foreign_key: true
      t.string :buy_name
      t.integer :buy_price

      t.timestamps
    end
  end
end
