class Order < ApplicationRecord
	# belongs_to :receivers
	belongs_to :cart
	belongs_to :user

	validates :cart, presence: true
end
