# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |n|
  u = User.create(name: "testman#{n}", email: "titi#{n}@gmail.com",
                  password: "testes1234", password_confirmation: "testes1234")
  u.posts.create(book_isbn:  "#{n}123456789", impression: "面白かった#{n}")
  u.book_user_reads.create(book_isbn: "#{n}123456789")
  u.book_want_to_reads.create(book_isbn: "#{n}123456789")
  u.ranks.create(book_isbn: "#{n}123456789", rank_id: 3)
  u.book_user_favorites.create(book_isbn: "#{n}123456789", description_summary: "マジやばい#{n}")
end
