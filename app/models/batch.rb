class Batch < ApplicationRecord
  belongs_to :user

  validates_presence_of :name, :ferment, :completed, :description

  # def accepted_ferments
  # end
end
