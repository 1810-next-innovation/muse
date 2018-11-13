class Cart < ApplicationRecord
	belongs_to :user
	# has_one    :order, 			dependent: :destroy
	has_many   :cart_items, dependent: :destroy
	has_many   :items, through: :cart_items

	validates :user, presence: true
end
