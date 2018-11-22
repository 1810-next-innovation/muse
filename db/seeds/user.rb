users = []

50.times do |n|
  gimei = Gimei.male
  users << User.new(
		name: "#{gimei.last.kanji}"+"#{gimei.first.kanji}",
		japanese_syllabaries: "#{gimei.last.hiragana}"+"#{gimei.first.hiragana}",
		gender: rand(1..2),
		post_code: "#{rand(1000000..9999999)}",
		address: "#{address.kanji}"+"#{rand(100)}-#{rand(10)}",
		phone_number: "090"+"#{rand(10000000..99999999)}",
		email: 	Faker::Internet.email,
		birthday: Faker::Date.between(80.days.ago, Date.today),
		password: Faker::Internet.password(6),
		admin: false,
		deleted_at: nil,
  )
end

User.import users
