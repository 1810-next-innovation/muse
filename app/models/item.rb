class Item < ApplicationRecord
	attachment :item_image


	def favorited_by?(user)
          favorites.where(user_id: user.id).exists?
    end
	# has_many :favorites,   dependent: :destroy
	# has_many :cart_items,  dependent: :destroy
	# has_many :cart, through: :cart_items
	# has_many :discs,       dependent: :destroy
	# has_many :music_names, dependent: :destroy
	# has_many :reviews,     dependent: :destroy
	# belongs_to :label

	#validates :label,     presence: true

	  def self.search(search) 
    if search 
      Item.where(['item_name LIKE ?', "%#{search}%"])
    else
      Item.all 
    end
  end
end
