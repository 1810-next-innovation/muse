# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Pathname.glob(Rails.root.join('db/seeds/*.rb')) do |path|
# 	load(path)
# end

User.create!(name: "管理者",
						 japanese_syllabaries: "かんりしゃ",
						 gender: 1,
						 post_code: 1234567,
						 address: "日本",
						 phone_number: "09012345678",
						 email: "admin@admin.com",
						 birthday: "20001010",
						 password: "111111",
						 admin: true,
						 deleted_at: nil)
Cart.create!(user_id: 1)
Receiver.create!(user_id: 1,
								 receiver_name: "管理者",
								 receiver_post_code: 1234567,
								 receiver_address: "日本",
								 receiver_address: "09012345678")

# 10.times do |n|
# 	name =

# 	gender = rand(3)
# 	post_code = rand(1000000..9999999)
# 	address: ""
# end

# 10.times do |n|
# 	item_name = Faker::
# end

# 10.times do |n|
# 	Receiver.create!(user_id: ,
# 									 receiver_name, "",
# 									 receiver_post_code, "",)
# end