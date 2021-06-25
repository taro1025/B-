class AddDefaultValueToAmountBook < ActiveRecord::Migration[6.1]
  def change
    change_column :amount_books, :camulative_page_now, :integer, default: 0
    change_column :amount_books, :camulative_page_four, :integer, default: 0
    change_column :amount_books, :camulative_page_eight, :integer, default: 0

    change_column :amount_books, :camulative_page_twelve, :integer, default: 0
    change_column :amount_books, :camulative_page_six_teen, :integer, default: 0
    change_column :amount_books, :camulative_page_twenty, :integer, default: 0

    change_column :amount_books, :camulative_page_twenty_four, :integer, default: 0
    change_column :amount_books, :camulative_page_twenty_eight, :integer, default: 0
    change_column :amount_books, :amount_page_this, :integer, default: 0

    change_column :amount_books, :amount_page_last, :integer, default: 0
    change_column :amount_books, :amount_book_this, :integer, default: 0
    change_column :amount_books, :amount_book_last, :integer, default: 0
  end
end
