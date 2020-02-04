class CreateBatches < ActiveRecord::Migration[6.0]
  def change
    create_table :batches do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.string :type
      t.boolean :completed
      t.text :description

      t.timestamps
    end
  end
end
