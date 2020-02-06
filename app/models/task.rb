class Task < ApplicationRecord
  belongs_to :batch

  validates_presence_of :title, :description, :due
  validates :completed, inclusion: { in: [true, false] }
end
