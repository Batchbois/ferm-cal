class FermentValidator < ActiveModel::Validator
    def validate(batch)
        valid_ferments = ['beer', 'pickle']
        unless valid_ferments.include?(batch.ferment)
            batch.errors[:ferment] << "Ferment must be 'beer' or 'pickle'."
        end
    end
end

class Batch < ApplicationRecord
  belongs_to :user
  has_many :tasks
  validates_presence_of :name, :ferment, :completed, :description
  validates_uniqueness_of :name
end
