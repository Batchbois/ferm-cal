require 'rails_helper'

RSpec.describe TasksController, type: :controller do
    let!(:example_user) { User.create(email: 'test@test.test', display_name: 'test', password: 'password', password_confirmation: 'password') }
    let(:task_params) { { batch_id: "", title: 'test', description: 'test', completed: false , due:2.days.from_now } }
    let!(:example_batch) { example_user.batches.create(name: 'Test Batch', ferment: 'beer', completed: false, description: 'This is a test batch', start_date: Date.today) }

    it "is not valid without a user" do
        task = Task.create(task_params)
        expect(task).to_not be_valid
        expect(task.errors.full_messages).to eq(["Batch must exist"])
    end
    it "is not valid withough a batch_id" do
        task_params[:batch_id] = nil
        task = example_user.tasks.create(task_params)
        expect(task).to_not be_valid
        expect(task.errors.full_messages).to eq(["Batch must exist"])
    end
    it "is not valid withough a title" do
        task_params[:title] = "test"
        task = example_user.tasks.create(task_params)
        expect(task).to_not be_valid
        expect(task.errors.full_messages).to eq(["Batch must exist"])

    end
    it "is not valid withough a description" do
        task_params[:description] = nil
        task = example_user.tasks.create(task_params)
        expect(task).to_not be_valid
        expect(task.errors.full_messages).to eq(["Batch must exist", "Description can't be blank"])


    end
    it "is not valid if :completed is not boolean" do
        task_params[:completed] = nil
        task = example_user.tasks.create(task_params)
        expect(task).to_not be_valid
        expect(task.errors.full_messages).to eq(["Batch must exist", "Completed is not included in the list"])
    end
    it "is not valid withough a due date" do
        task_params[:due] = nil
        task = example_user.tasks.create(task_params)
        expect(task).to_not be_valid
        expect(task.errors.full_messages).to eq(["Batch must exist", "Due can't be blank"])

    end
end
