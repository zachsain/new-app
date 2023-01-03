class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.string :stock_name
      t.string :ticker
      t.integer :purchase_price
      t.integer :user_id
     
      t.timestamps
    end
  end
end
