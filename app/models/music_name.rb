class MusicName < ApplicationRecord
	belongs_to :disc
	belongs_to :genre
	belongs_to :artist

	# validates :disc_id,   presence: true
	validates :genre_id,  presence: true
	validates :artist_id, presence: true
end
