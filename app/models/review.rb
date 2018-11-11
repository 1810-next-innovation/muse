class Review < ApplicationRecord
	belongs_to :item
	validates :item, presence: true
end
