class StockSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
end
