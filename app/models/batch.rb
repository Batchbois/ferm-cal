class Batch < ApplicationRecord
  belongs_to :user
  has_many :tasks
  validates_presence_of :name, :ferment, :completed, :description
  validates_uniqueness_of :name
  validates :ferment, inclusion: { in: %w[beer pickle], message: "FermCal currently supports 'beer and 'pickle'." }
end
