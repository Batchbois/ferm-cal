class AddStartDateToBatches < ActiveRecord::Migration[6.0]
  def change
    add_column :batches, :start_date, :date
  end
end
