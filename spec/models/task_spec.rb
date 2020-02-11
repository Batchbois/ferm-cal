require 'rails_helper'

RSpec.describe Task, type: :model do
    let!(:example_user) { User.create(email: 'test@test.test', display_name: 'test', password: 'password', password_confirmation: 'password') }
    let!(:example_batch) { example_user.batches.create(name: 'Test Batch', ferment: 'beer', completed: false, description: 'This is a test batch', start_date: Date.today) }
    let(:task_params) { { title: 'test', description: 'test', due: 2.days.from_now } }

    it "is not valid withough a batch_id" do
        task = example_user.tasks.create(task_params)
        expect(task).to_not be_valid
        expect(task.errors.full_messages).to eq(["Batch must exist"])
    end

    it "is not valid if :completed is not boolean" do
        task_params[:completed] = nil
        task = example_batch.tasks.create(task_params)
        expect(task).to_not be_valid
        expect(task.errors.full_messages).to eq(["Completed is not included in the list"])
    end

    it "has a default completion status of false" do
        task = example_batch.tasks.create(task_params)
        expect(task).to be_valid
        expect(Task.count).to eq(1)
        expect(Task.first[:completed]).to eq(false)
    end

    it { should belong_to :batch }
    it { should validate_presence_of :title }
    it { should validate_presence_of :description }
    it { should validate_presence_of :due }

end
