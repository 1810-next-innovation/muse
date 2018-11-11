class CreateReceivers < ActiveRecord::Migration[5.2]
  def change
    create_table :receivers do |t|
      t.string :receiver_name
      t.text :receiver_address

      t.timestamps
    end
  end
end
