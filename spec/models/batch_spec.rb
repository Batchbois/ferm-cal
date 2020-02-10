require 'rails_helper'

RSpec.describe Batch, type: :model do
    let!(:example_user) { User.create(email: 'test@test.test', display_name: 'test', password: 'password', password_confirmation: 'password') }
    let(:batch_params) { { name: 'test', ferment: 'beer', description: 'test', start_date: Date.today } }
    it "is not valid without a user" do
        batch = Batch.create(batch_params)
        expect(batch).to_not be_valid
        expect(batch.errors.full_messages).to eq(["User must exist"])
    end
    it 'is not valid without a name' do
        batch_params[:name] = nil
        batch = example_user.batches.create(batch_params)
        expect(batch).to_not be_valid
        expect(batch.errors.full_messages).to eq(["Name can't be blank"])
    end
    it "is not valid without a valid ferment type" do
        batch_params[:ferment] = 'cat'
        batch = example_user.batches.create(batch_params)
        expect(batch).to_not be_valid
        expect(batch.errors.full_messages).to eq(["Ferment FermCal currently supports 'beer' and 'pickle'."])
    end
    it "is not valid without a description" do
        batch_params[:description] = nil
        batch = example_user.batches.create(batch_params)
        expect(batch).to_not be_valid
        expect(batch.errors.full_messages).to eq (["Description can't be blank"])
    end
    it "is not valid without a start date" do
        batch_params[:start_date] = nil
        batch = example_user.batches.create(batch_params)
        expect(batch).to_not be_valid
        expect(batch.errors.full_messages).to eq(["Start date can't be blank"])
    end
    it "is not valid if :completed is not boolean" do
        batch_params[:completed] = nil
        batch = example_user.batches.create(batch_params)
        expect(batch).to_not be_valid
        expect(batch.errors.full_messages).to eq(["Completed must be a boolean"])
    end
    # it "idk" do
    #     batch_params[:inclusion] = nil
    #     batch = example_user.batches.create(batch_params)
    #     expect(batch.errors.full_messages).to eq([""])
    #     expect(batch.errors.full_messages)
    # end
end
