class AddColumnImgUrlRank < ActiveRecord::Migration[6.1]
  def change
    add_column :ranks, :url, :string
  end
end
