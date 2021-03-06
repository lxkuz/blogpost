# frozen_string_literal: true

class Story < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_and_belongs_to_many :articles

  include LiveUpdatable
end
