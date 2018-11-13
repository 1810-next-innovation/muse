class BuyDatum < ApplicationRecord
	# belongs_to :cart_item
	validates :cart_item, presence: true
end
