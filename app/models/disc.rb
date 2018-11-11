class Disc < ApplicationRecord
	has_many :music_names
	belongs_to :item

	validates :item, presence: true
end
