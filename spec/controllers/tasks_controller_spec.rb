require 'rails_helper'
RSpec.describe TasksController, type: :controller do
    let!(:example_user) { User.create(email: 'test@test.test', display_name: 'test', password: 'password', password_confirmation: 'password') }
    let!(:example_batch) { example_user.batches.create(name: 'Test Batch', ferment: 'beer', completed: false, description: 'This is a test batch', start_date: Date.today) }
    describe 'GET #index', type: :request do
        it 'rejects the request if no user is signed in' do
            get '/tasks.json'
            expect(response.status).to eq(403)
            expect(response.body).to eq('Not signed in')
        end
        it 'retrieves an array of tasks if the user is signed in' do
            sign_in example_user
            get '/tasks.json'
            json = JSON.parse(response.body)
            expect(json.class).to eq(Array)
        end
    end
    describe 'POST #create', type: :request do
        it 'rejects the request if no user is signed in' do
            post '/tasks'
            expect(response.status).to eq(403)
            expect(response.body).to eq('Not signed in')
        end
        it 'fails to create a new task with invalid params' do
            sign_in example_user
            task_params = {
                task: {
                    batch_id: example_batch.id,
                    title: '',
                    description: '',
                    completed: '',
                    due: ''
                }
            }
            post '/tasks', params: task_params
            json= JSON.parse(response.body)
            expect(response.body).to include ""
            expect(json['title']).to include "can't be blank"
        end
    end


    describe 'PUT #update', type: :request do
        it 'it should reject requests if no user is signed in' do
            put "/tasks/1"
            expect(response.body).to eq('not signed in')
        end
    end
end
