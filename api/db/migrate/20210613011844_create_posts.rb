class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :book_id, null: false
      t.integer :user_id, null: false
      t.text :impression

      t.timestamps
    end
  end
end
