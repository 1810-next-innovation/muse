class Item < ApplicationRecord
	attachment :item_image


	def favorited_by?(user)
    favorites.where(user_id: user.id).exists?
  end
	has_many :favorites
	has_many :users, through: :favorites
	has_many :cart_items,  dependent: :destroy
	has_many :reviews,     dependent: :destroy
	belongs_to :label

	has_many :discs,       dependent: :destroy, inverse_of: :item
	accepts_nested_attributes_for :discs, reject_if: :all_blank, allow_destroy: true

	validates :label, presence: true
	validates :item_name, presence: true
	validates :price, presence: true
	validates :release_date, presence: true
	validates :stock, presence: true

	def self.search(search)
    if search
      Item.where(['item_name LIKE ?', "%#{search}%"])
    else
      Item.all
    end
  end
end
