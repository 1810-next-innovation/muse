class Cart < ApplicationRecord
	belongs_to :user
	has_one    :order, dependent: :destroy
	has_many   :cart_items, dependent: :destroy

	validates :user, presence: true
end
