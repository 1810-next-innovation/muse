users = []

users << User.new(
  name: "管理者",
	japanese_syllabaries: "かんりしゃ",
	gender: 1,
	post_code: 1234567,
	address: "日本",
	phone_number: "09012345678",
	email: "admin@admin.com",
	birthday: "20001010",
	password: "111111",
	admin: true,
	deleted_at: nil
)

50.times do |n|
  gimei = Gimei.male
  users << User.new(
    japanese_syllabaries: "かんりしゃ",
  	gender: 1,
  	post_code: 1234567,
  	address: "日本",
  	phone_number: "09012345678",
  	email: "admin@admin.com",
  	birthday: "20001010",
  	password: "111111",
  	admin: false,
  	deleted_at: nil
  )
end

User.import users
