class ChangeColumnNotification < ActiveRecord::Migration[6.1]
  def change
    remove_column :notifications, :checked, :integer
    add_column :notifications, :checked, :boolean, default: false, null: false
  end
end
