class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :image
      t.text :description
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
