class Item < ApplicationRecord
	attachment :item_image

	has_many :favorites,   dependent: :destroy
	has_many :cart_items,  dependent: :destroy
	has_many :cart, through: :cart_items
	has_many :discs,       dependent: :destroy
	has_many :music_names, dependent: :destroy
	has_many :reviews,     dependent: :destroy
	belongs_to :label

	validates :label,     presence: true


	def favorited_by?(user)
          favorites.where(user_id: user.id).exists?
    end
	
end
