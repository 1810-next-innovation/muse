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

# コマンド
# rails db:migrate:reset
# rails db:seed
# rails db:seed:item

gimei = Gimei.name
address = Gimei.address

User.create!(
	name: "管理者",
	japanese_syllabaries: "かんりしゃ",
	gender: rand(1..2),
	post_code: "#{rand(1000000..9999999)}",
	address: "#{address.kanji}"+"#{rand(100)}-#{rand(10)}",
	phone_number: "090"+"#{rand(10000000..99999999)}",
	email: "admin@admin.com",
	birthday: Faker::Date.between(80.days.ago, Date.today),
	password: "111111",
	admin: true,
	deleted_at: nil,
)

User.create!(
	name: "#{gimei.last.kanji}"+"#{gimei.first.kanji}",
	japanese_syllabaries: "#{gimei.last.hiragana}"+"#{gimei.first.hiragana}",
	gender: rand(1..2),
	post_code: "#{rand(1000000..9999999)}",
	address: "#{address.kanji}"+"#{rand(100)}-#{rand(10)}",
	phone_number: "090"+"#{rand(10000000..99999999)}",
	email: "user@user.com",
	birthday: Faker::Date.between(80.days.ago, Date.today),
	password: "111111",
	admin: false,
	deleted_at: nil,
)

Cart.create!(user_id: 1)
Cart.create!(user_id: 2)

2.times do |n|
	Receiver.create!(
		user_id: 2,
		receiver_name: "#{gimei.last.kanji}"+"#{gimei.first.kanji}",
		receiver_post_code: "#{rand(1000000..9999999)}",
		receiver_address: "#{address.kanji}"+"#{rand(100)}-#{rand(10)}",
		receiver_phone_number: "090"+"#{rand(10000000..99999999)}",
	)
end

5.times do |n|
	Label.create!(label_name: Faker::Company.name)
	Artist.create!(artist_name: Faker::Music.band)
	Genre.create!(genre_name: Faker::Music.genre)
end

# 20.times do |n|
# 	Label.create!(
# 		label_name: "",
# 	)
# end

11.times do |n|
	Item.create!(
		label_id: rand(1..5),
		artist_id: rand(1..5),
		genre_id: rand(1..5),
		item_name: Faker::Music.album,
		# item_image_id: ,
		price: rand(1000..3000),
		release_date: Faker::Date.between(20.days.ago, Date.today),
		opinion: Faker::Lorem.sentence,
		stock: rand(100),
		monthly_sales: rand(300),
		weekly_sales: rand(100),
	)
end
