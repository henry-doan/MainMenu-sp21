# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
2.times do
  restaurant = Restaurant.create(
  name: Faker::Restaurant.name, 
  image: Faker::Avatar.image,
  description: Faker::Restaurant.description   
)

  2.times do 
    menu = Menu.create(
      name: Faker::FunnyName.name,
      image: Faker::Avatar.image,
      description: Faker::Food.description 
    )

    2.times do
      item = Item.create(
        name: Faker::Food.dish,
        description: Faker::Food.description, 
        price: Faker::Commerce.price(range: 0..10.0, as_string: true),
        image: Faker::Avatar.image
      )
    end
  end
end

puts "Data Seeded."