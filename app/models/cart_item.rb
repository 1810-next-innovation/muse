class CartItem < ApplicationRecord
	belongs_to :item
	belongs_to :cart

	validates :item, presence: true
	validates :cart, presence: true
end
