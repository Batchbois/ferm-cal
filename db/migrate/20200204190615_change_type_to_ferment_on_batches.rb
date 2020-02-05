class ChangeTypeToFermentOnBatches < ActiveRecord::Migration[6.0]
  def change
      rename_column(:batches, :type, :ferment)
  end
end
