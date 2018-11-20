class CartItem < ApplicationRecord
	belongs_to :item
	belongs_to :cart
	has_one :buy_datum, dependent: :destroy

	validates :item, presence: true
	validates :cart, presence: true

	paginates_per 10
end
