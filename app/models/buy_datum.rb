class BuyDatum < ApplicationRecord
	belongs_to :cart_item
	
	attachment :buy_item_image
end
