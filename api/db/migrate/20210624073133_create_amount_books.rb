class CreateAmountBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :amount_books do |t|
      t.integer :user_id, null: false
      t.integer :camulative_page_now
      t.integer :camulative_page_four #４日になったらcamulative_page_nowをコピー
      t.integer :camulative_page_eight
      t.integer :camulative_page_twelve
      t.integer :camulative_page_six_teen
      t.integer :camulative_page_twenty
      t.integer :camulative_page_twenty_four
      t.integer :camulative_page_twenty_eight
      t.integer :amount_page_this
      t.integer :amount_book_this #読んだ本を追加時に１加算
      t.integer :amount_page_last
      t.integer :amount_book_last #月が変わる瞬間にthisをlastにコピー

      t.timestamps
    end
  end
end
