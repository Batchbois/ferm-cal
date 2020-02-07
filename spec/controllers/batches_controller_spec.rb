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
        it 'successfully creates batches and also creates tasks' do
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

    describe 'PUT #update', type: :request do
        it 'should reject request if no user is signed in' do
            put "/batches/1"
            expect(response.body).to eq('not signed in')
        end
        it 'should update when provoked' do
            sign_in example_user
            example_batch_params = {name: 'Test Batch', ferment: 'beer', completed: false, description: 'This is a test batch', start_date: Date.today}
            example_batch = example_user.batches.create(example_batch_params)
            expect(example_batch.name).to eq('Test Batch')
            put "/batches/#{example_batch.id}", params: { batch: { name: 'Batch Test' } }
            expect(Batch.find(example_batch.id).name).to eq('Batch Test')

            # expect(example_user.batches.count).to eq(1)

            # expect(response.body).to eq ('sucessful update')
        end
    end

    describe 'DELETE #destroy', type: :request do
        it 'should reject requests if no user is signed in' do
            delete "/batches/1"
            expect(response.body).to eq('Not signed in')
        end
        it 'should disallow deletions when no such batch exists' do
            sign_in example_user
            expect { delete "/batches/1" }.to raise_error
        end
        it 'should destroy what we want it to' do
            sign_in example_user
            example_batch_params = {name: 'Test Batch', ferment: 'beer', completed: false, description: 'This is a test batch', start_date: Date.today}
            example_batch = example_user.batches.create(example_batch_params)
            expect(example_user.batches.where(example_batch_params).count).to eq(1)
            delete "/batches/#{example_batch.id}"
            expect(response.body).to eq('successful deletion')
        end
    end

end
