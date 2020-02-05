require 'rails_helper'
#see rails_helper for final line where devise is enabled

RSpec.describe 'BatchesController' do
    describe 'POST #create', type: :request do
        it 'automatically creates tasks when creating batches' do
            user = User.create(email: 'test@test.test', display_name: 'test', password: 'password', password_confirmation: 'password')
            sign_in user
            batch_params = {
                batch: {
                    name: 'Example Batch',
                    ferment: 'beer',
                    completed: false,
                    description: 'This is a test task.'
                }
            }
            post '/batches', params: batch_params
            expect(User.count).to eq(1)
            expect(Batch.count).to eq(1)
            expect(Task.count).to eq(3)
            expect(User.first.batches.size).to eq(1)
            expect(User.first.tasks.size).to eq(3)
            expect(Task.first[:description]).to eq('This task is a placeholder beer task!')
        end
    end
end
