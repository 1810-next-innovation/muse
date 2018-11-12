class Disc < ApplicationRecord
	has_and_belongs_to_many :music_names
	belongs_to :item

	validates :item, presence: true
end
