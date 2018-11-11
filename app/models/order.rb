class Order < ApplicationRecord
	belongs_to :receivers
	belongs_to :cart

	validates :cart, presence: true
end
