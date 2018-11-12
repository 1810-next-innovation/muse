class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :receivers, dependent: :destroy
  has_many :carts,     dependent: :destroy
  has_many :favorites, dependent: :destroy

  class << self
  	def search
  		if search
  		User.where(['name LIKE ?', "%#{search}%"])
  	    else
  	 	User.all
  	    end
  	end
  end
end
