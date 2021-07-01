class ChangeColumnBookWantToRead < ActiveRecord::Migration[6.1]
  def change
    add_column :book_want_to_reads, :url, :string
    add_column :book_want_to_reads, :medium_url, :string
  end
end
