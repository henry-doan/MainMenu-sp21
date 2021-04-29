

rimages = ['https://images.unsplash.com/photo-1589459985166-966c72e767d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1612204021719-fa46ad9bd805?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1616362258595-28a25ece05f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1601306483417-134e652e544f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',]

mimages = ['https://images.unsplash.com/photo-1492708398880-82c528f414c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZWFrZmFzdHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1505252912265-4e83cec30e2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJyZWFrZmFzdHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1587491439149-bd2ff295d450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmV2ZXJhZ2VzfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60']

iimages = ['https://images.unsplash.com/photo-1612204021719-fa46ad9bd805?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1599340244135-9d58bd0d8fb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1582234363542-ee64d0ccb0d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRpbm5lcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1561043433-9265f73e685f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRpbm5lcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRpbm5lcnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' ]

menuname = ['Breakfast', 'Lunch', 'Drinks', 'Dinner', 'Specials']

5.times do |i|
  user = User.create(
    name: Faker::FunnyName.name,
    email: "test#{i}@email.com",
    password: 'password'
  )

  4.times do
    restaurant = Restaurant.create(
    name: Faker::Restaurant.name, 
    image: rimages.sample,
    description: Faker::Restaurant.type, 
    user_id: user.id 
  )

  3.times do 
    menu = Menu.create(
      name: menuname.sample,
      image: mimages.sample,
      description: Faker::Food.description,
      restaurant_id: restaurant.id
    )

    5.times do
      item = Item.create(
        name: Faker::Food.dish,
        description: Faker::Food.description, 
        price: '$5',
        image: iimages.sample,
        menu_id: menu.id
      )
    end
end
end
end


