class AddDefaultValueToCompletedColumns < ActiveRecord::Migration[6.0]
  def change
    change_column_default :tasks, :completed, false
    change_column_default :batches, :completed, false
  end
end
