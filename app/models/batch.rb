class Batch < ApplicationRecord
  belongs_to :user
  has_many :tasks
  validates_presence_of :name, :ferment, :description
  validates :completed, inclusion: { in: [true, false] }
  validates :ferment, inclusion: { in: %w[beer pickle], message: "FermCal currently supports 'beer and 'pickle'." }
end
