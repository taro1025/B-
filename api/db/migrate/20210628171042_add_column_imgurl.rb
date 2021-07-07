class AddColumnImgurl < ActiveRecord::Migration[6.1]
  def change
    add_column :ranks, :medium_url, :string
    add_column :posts, :url, :string
    add_column :posts, :medium_url, :string
    add_column :users, :image, :string
  end
end
