class CreateWantToReads < ActiveRecord::Migration[6.1]
  def change
    create_table :want_to_reads do |t|
      t.integer :book_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
