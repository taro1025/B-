class AsosiationRankAndBookUserRead < ActiveRecord::Migration[6.1]
  def change
    rename_column :ranks, :rank_id, :rank
    add_column :book_user_reads, :rank_id, :integer
    add_column :posts, :rank_id, :integer
  end
end
