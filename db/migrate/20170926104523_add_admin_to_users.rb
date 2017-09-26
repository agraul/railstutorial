class AddAdminToUsers < ActiveRecord::Migration[5.1]
  def change
    # default is 'nil' and does not need to be set to false for our use case,
    # but having it more explicit makes it more clear
    add_column :users, :admin, :boolean, default: false
  end
end
