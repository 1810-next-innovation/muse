class MusicName < ApplicationRecord
	belongs_to :genre
	belongs_to :artist
	has_and_belongs_to_many :discs

	# validates :genre_id,  presence: true
	# validates :artist_id, presence: true
	# validates :disc_id,   presence: true
end
