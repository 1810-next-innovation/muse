class Disc < ApplicationRecord
	has_many :music_names
	accepts_nested_attributes_for :music_names, allow_destroy: true

	belongs_to :item

	validates :item, presence: true
end
