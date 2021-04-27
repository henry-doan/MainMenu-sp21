class AddFavoriteToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :favorite, :boolean
    change_column :resturants, :favorites, :boolean, :default => false
  end
end
