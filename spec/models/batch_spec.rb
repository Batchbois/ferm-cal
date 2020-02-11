require 'rails_helper'

RSpec.describe Batch, type: :model do

    let!(:example_user) { User.create(email: 'test@test.test', display_name: 'test', password: 'password', password_confirmation: 'password') }
    let(:batch_params) { { name: 'test', ferment: 'beer', description: 'test', start_date: Date.today } }
    it "is not valid without a user" do
        batch = Batch.create(batch_params)
        expect(batch).to_not be_valid
        expect(batch.errors.full_messages).to eq(["User must exist"])
    end

    it "is not valid if :completed is not boolean" do
        batch_params[:completed] = nil
        batch = example_user.batches.create(batch_params)
        expect(batch).to_not be_valid
        expect(batch.errors.full_messages).to eq(["Completed is not included in the list"])
    end

    it { should belong_to :user }
    it { should validate_inclusion_of(:ferment).in_array(['beer', 'pickle'])}
    it { should validate_presence_of(:name)}
    it { should validate_presence_of(:ferment)}
    it { should validate_presence_of(:description)}
    it { should validate_presence_of(:start_date)}


end
