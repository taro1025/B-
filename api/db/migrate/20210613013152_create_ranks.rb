class CreateRanks < ActiveRecord::Migration[6.1]
  def change
    create_table :ranks do |t|
      t.integer :rank_id, null: false
      t.integer :book_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
