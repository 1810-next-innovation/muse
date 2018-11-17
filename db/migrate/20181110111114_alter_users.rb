class AlterUsers < ActiveRecord::Migration[5.2]
  def change
  	add_column :users, :japanese_syllabaries, :string
  	add_column :users, :gender,               :integer
  	add_column :users, :phone_number,         :string
  	add_column :users, :address,              :string
  	add_column :users, :post_code,            :string
  	add_column :users, :birthday,             :date
  	add_column :users, :admin,                :boolean
  	add_column :users, :delete_flag,          :boolean
  end
end
