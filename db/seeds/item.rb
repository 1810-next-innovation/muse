items = []

10.times do |n|
	items << Item.new(
		label_id: rand(11),
		item_name: Faker::Music.album,
		# item_image_id: ,
		price: rand(4000),
		release_date: Faker::Date.between(20.days.ago, Date.today),
		opinion: Faker::Lorem.sentence,
		stock: rand(30))
end

Item.import items #バルクインサート
