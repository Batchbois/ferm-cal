require 'rails_helper'

RSpec.describe 'Batch Controller' do

    # I want to acknowledge devise in these tests.

    describe 'POST #create', type: :request do
        it 'automatically instantiates tasks when creating batches' do

            batch_params = {
                name: 'Example Batch',
                ferment: 'beer',
                completed: false,
                description: 'This is a seeded task.' 
            }
            current_user.batches.create(batch_params)
        end
    end
end
