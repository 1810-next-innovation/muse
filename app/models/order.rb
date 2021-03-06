class Order < ApplicationRecord
	belongs_to :receiver
	belongs_to :cart

	validates :cart, presence: true
	# validates :receiver, presence: true
	validates :grand_total, presence: true
	validates :payment_method, presence: true

	enum payment_method: {credit_card: 0, cash_on_delivery: 1, others: 2}
	enum status: {in_preparation: 0, sent: 1, delivered: 2}
end
