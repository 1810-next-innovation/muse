class MusicName < ApplicationRecord

	belongs_to :disc
	belongs_to :genre
	belongs_to :artist

	validates :genre,  presence: true
	validates :artist, presence: true
end
