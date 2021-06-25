class AddColumnPageToBookUserRead < ActiveRecord::Migration[6.1]
  def change
    add_column :book_user_reads, :page, :integer
  end
end
