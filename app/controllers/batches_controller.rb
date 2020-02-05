class BatchesController < ApplicationController
    def index
        if user_signed_in?
            @batches = current_user.batches
        else
            @batches = Batch.all
        end
        render json: @batches.to_json(:include => :tasks)
    end

    def create
        batch = current_user.batches.create(batch_params)
        if batch.valid?

            render json: batch
        else
            render json: batch.errors
        end
    end

    def batch_params
        params.require(:batch).permit(:name, :ferment, :completed, :description)
    end
end
