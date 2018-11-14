class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.references :user, foreign_key: true
      t.references :cart, foreign_key: true
      t.integer :grand_total
      t.integer :payment_method
      t.integer :receiver_id
      t.string  :status

      t.timestamps
    end
  end
end
