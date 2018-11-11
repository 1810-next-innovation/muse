class Item < ApplicationRecord
	has_many :favorites,  dependent: :destroy
	has_many :cart_items, dependent: :destroy
	has_many :discs,      dependent: :destroy
	has_many :reviews,    dependent: :destroy
	belongs_to :label

	#validates :label,     presence: true
end
