class MusicName < ApplicationRecord
	belongs_to :genre
	belongs_to :artist
	belongs_to :disc

	validates :genre_id,  presence: true
	validates :artist_id, presence: true
	validates :disc_id,   presence: true
end
