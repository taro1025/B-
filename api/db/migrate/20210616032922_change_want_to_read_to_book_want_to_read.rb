class ChangeWantToReadToBookWantToRead < ActiveRecord::Migration[6.1]
  def change
    rename_table :want_to_reads, :book_want_to_reads
  end
end
