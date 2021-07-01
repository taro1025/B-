class ChangeColumnBookUserFavorite < ActiveRecord::Migration[6.1]
  def change
    add_column :book_user_favorites, :url, :string
    add_column :book_user_favorites, :medium_url, :string
  end
end
