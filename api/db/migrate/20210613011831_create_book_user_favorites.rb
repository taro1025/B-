class CreateBookUserFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :book_user_favorites do |t|
      t.integer :book_id, null: false
      t.integer :user_id, null: false
      t.text :description_summary
      t.text :description

      t.timestamps
    end
  end
end
