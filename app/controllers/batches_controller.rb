class BatchesController < ApplicationController
    def index
        if user_signed_in?
            @batches = Batch.where(:user_id == current_user.id)
        else
            @batches = Batch.all
        end
        render json: @batches
    end

    # def show
    #     @batches = Batch.find(params[:id])
    # end
    def create
        batch = Batch.create(batch_params)
        if batch.valid?
            render json: batch
        else
            render json: batch.errors
        end
    end

    def batch_params
        params.require(:batch).permit(:name, :user_id, :ferment, :completed, :description)
    end
end
