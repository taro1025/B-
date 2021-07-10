class AddColumnBookTitle < ActiveRecord::Migration[6.1]
  def change
    add_column :book_want_to_reads, :title, :string
    add_column :ranks, :title, :string
    add_column :book_user_reads, :title, :string
    add_column :book_user_favorites, :title, :string
    add_column :posts, :title, :string
  end
end
