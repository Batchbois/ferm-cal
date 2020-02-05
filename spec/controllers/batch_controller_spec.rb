require 'rails_helper'

RSpec.describe 'Batch Controller' do

    # I want to acknowledge devise in these tests.

    describe 'POST #create', type: :request do
        # use a helper to correctly do devise junk
        it 'automatically instantiates tasks when creating batches' do

            user = User.create(email: 'test@test.test', display_name: 'test', password: 'password', password: 'password')
            sign_in user
            batch_params = {
                name: 'Example Batch',
                ferment: 'beer',
                completed: false,
                description: 'This is a test task.'
            }
            user.batches.create(batch_params)
            expect(User.count).to eq(1)
            expect(Batch.count).to eq(1)
            expect(Task.count).to eq(3)
        end
    end
end
