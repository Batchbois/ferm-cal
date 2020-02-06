require 'rails_helper'
#see rails_helper for final line where devise is enabled

RSpec.describe BatchesController, type: :controller do
    let!(:example_user) { User.create(email: 'test@test.test', display_name: 'test', password: 'password', password_confirmation: 'password') }

    describe 'GET #index', type: :request do
        it 'rejects the request when user is not signed in' do
            get '/batches.json'
            expect(response.status).to eq(403)
            expect(response.body).to eq('Not signed in')
        end

        it 'batches array comes through' do
            sign_in example_user
            get '/batches.json'
            json = JSON.parse(response.body)
            expect(json.class).to eq(Array)
        end
    end
    describe 'POST #create', type: :request do
        it 'rejects the request when user is not signed in' do
            post '/batches'
            expect(response.status).to eq(403)
            expect(response.body).to eq('Not signed in')
        end
        it 'returns errors for invalid batch creation' do
            sign_in example_user
            batch_params = {
                batch: {
                    name: '',
                    ferment: '',
                    completed: '',
                    description: '',
                    start_date: ''
                }
            }
            post '/batches', params: batch_params
            json = JSON.parse(response.body)
            expect(response.status).to eq(422)
            expect(json['name']).to include "can't be blank"
        end
        it 'automatically creates tasks when creating batches' do
            sign_in example_user
            batch_params = {
                batch: {
                    name: 'Example Batch',
                    ferment: 'beer',
                    completed: false,
                    description: 'This is a test task.',
                    start_date: Date.today
                }
            }
            post '/batches', params: batch_params
            expect(Batch.count).to eq(1)
            expect(Task.count).to eq(3)
            expect(example_user.batches.size).to eq(1)
            expect(example_user.tasks.size).to eq(3)
            expect(Task.first[:description]).to eq('This task is a placeholder beer task!')
        end
    end
end
