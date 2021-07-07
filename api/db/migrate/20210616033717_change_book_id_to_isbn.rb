class ChangeBookIdToIsbn < ActiveRecord::Migration[6.1]
  def change
    remove_column :book_want_to_reads, :book_id, :integer
    remove_column :book_user_reads, :book_id, :integer
    remove_column :ranks, :book_id, :integer
    remove_column :posts, :book_id, :integer
    remove_column :book_user_favorites, :book_id, :integer
    add_column :book_want_to_reads, :book_isbn, :string
    add_column :book_user_reads, :book_isbn, :string
    add_column :ranks, :book_isbn, :string
    add_column :posts, :book_isbn, :string
    add_column :book_user_favorites, :book_isbn, :string
  end
end
