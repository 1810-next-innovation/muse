class Disc < ApplicationRecord
	belongs_to :item

	has_many :music_names, inverse_of: :disc
	accepts_nested_attributes_for :music_names, reject_if: :all_blank, allow_destroy: true

	validates :item, presence: true
end
