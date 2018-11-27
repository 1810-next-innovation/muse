class Receiver < ApplicationRecord
	belongs_to :user
	has_many :orders

	validates :receiver_name, presence: true
	validates :receiver_post_code, presence: true
	validates :receiver_address, presence: true
	validates :receiver_phone_number, presence: true
end
