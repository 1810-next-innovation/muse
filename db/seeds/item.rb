items = []

100.times do |n|
	items << Item.new(
		label_id: 2,
		item_name: Faker::Music.album,
		# item_image_id: ,
		price: rand(1000..4000),
		release_date: Faker::Date.between(20.days.ago, Date.today),
		opinion: Faker::Lorem.sentence,
		stock: rand(100))
end

Item.import items #バルクインサート
