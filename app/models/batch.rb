class Batch < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy
  validates_presence_of :name, :ferment, :description, :start_date
  validates :completed, inclusion: { in: [true, false] }
  validates :ferment, inclusion: { in: %w[beer pickle], message: "FermCal currently supports 'beer and 'pickle'." }
end
