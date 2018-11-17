class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  acts_as_paranoid


  # has_many :receivers, 							 dependent: :destroy
  has_many :carts,     							 dependent: :destroy
  has_many :orders, through: :carts, dependent: :destroy

  enum gender: {man: 1, woman: 2 }
  # has_many :favorites, 							 dependent: :destroy

  # validates :name, presence: true, uniqueness: true, length: { minimum: 2, maximum: 20, allow_blank: true}
  # validates :japanese_syllabaries, presence: true, length: { maximum: 30}
  # validates :gender, acceptance: true
  # validates :post_code, presence: true, length: { maximum: 7}
  # validates :address, presence: true
  # validates :phone_number, presence: true, length: {maximum: 13}
  # validates :email, email: {allow_blank: true}



  def self.search(search) 
    if search 
      User.where(['name LIKE ?', "%#{search}%"])
    else
      User.all 
    end
  end

   
end
