class Genre < ApplicationRecord
	has_many :music_names
	has_many :items
end
