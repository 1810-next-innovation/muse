class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :item_id
      t.integer :cart_id
      t.integer :quantity, default: 0
      t.integer :buy_price

      t.timestamps
    end
  end
end
