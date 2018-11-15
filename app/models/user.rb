class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  # has_many :receivers, 							 dependent: :destroy
  has_many :carts,     							 dependent: :destroy
  has_many :orders, through: :carts, dependent: :destroy

  enum gender: {man: 1, woman: 2 }
  # has_many :favorites, 							 dependent: :destroy

  def self.search(search) 
    if search 
      User.where(['name LIKE ?', "%#{search}%"])
    else
      User.all 
    end
  end
end
