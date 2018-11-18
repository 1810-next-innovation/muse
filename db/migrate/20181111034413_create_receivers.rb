class CreateReceivers < ActiveRecord::Migration[5.2]
  def change
    create_table :receivers do |t|
    	t.references :user, foreign_key: true
    	t.string :receiver_name
    	t.integer :receiver_post_code
      t.text :receiver_address
      t.string :receiver_phone_number

      t.timestamps
    end
  end
end
