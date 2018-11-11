class CreateBuyData < ActiveRecord::Migration[5.2]
  def change
    create_table :buy_data do |t|
      t.integer :cart_item_id
      t.integer :buy_price

      t.timestamps
    end
  end
end
