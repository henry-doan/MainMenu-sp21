
5.times do |i|
  user = User.create(
    name: Faker::FunnyName.name,
    email: "test#{i}@email.com",
    password: 'password'
  )

  5.times do
    restaurant = Restaurant.create(
    name: Faker::Restaurant.name, 
    image: Faker::Avatar.image,
    description: Faker::Restaurant.type, 
    user_id: user.id 
  )

  2.times do 
    menu = Menu.create(
      name: Faker::FunnyName.name,
      image: Faker::Avatar.image,
      description: Faker::Food.description,
      restaurant_id: restaurant.id
    )

    5.times do
      item = Item.create(
        name: Faker::Food.dish,
        description: Faker::Food.description, 
        price: '$5',
        image: Faker::Avatar.image,
        menu_id: menu.id
      )
    end
end
end
end