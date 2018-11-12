class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|

      t.timestamps
      t.string :title
      t.text :body
    end
  end
end
