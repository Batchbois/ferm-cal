class Task < ApplicationRecord
  belongs_to :batch

  validates_presence_of :description, :due, :completed
end
