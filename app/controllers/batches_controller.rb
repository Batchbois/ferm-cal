require_relative '../../lib/content/default_tasks.rb'
# imports $default_tasks from the above file
# these default_tasks are currently hard-coded
# and will need to be made more specific.
# Icebox: These become configurable by the user

class BatchesController < ApplicationController
    def initialize
        @default_tasks = $default_tasks
    end

    def index
        if user_signed_in?
            batches = current_user.batches
            render json: batches.to_json(include: :tasks)
        else
            render status: 403, plain: 'Not signed in'
        end
    end

    def show
        if user_signed_in?
            batch = Batch.find(params[:id])
            render json: batch
        else
            render status: 403, plain: 'Not signed in'
        end
    end

    def create
        if user_signed_in?
            batch = current_user.batches.create(batch_params)
            if batch.valid?
                # looks for our hard-coded task presets (see below)
                @default_tasks[batch[:ferment]].each do |task|
                    task[:due] = task[:due].days.since(batch.start_date).noon.to_datetime
                    batch.tasks.create(task)
                end
                render json: batch.to_json(include: :tasks)
            else
                render json: batch.errors, status: 422
            end
        else
            render status: 403, plain: 'Not signed in'
        end
    end

    def update
        if user_signed_in?
            batch = Batch.find(params[:id])
            if batch
                batch.update(batch_params)
                render json: batch
            end
            if batch.completed
                batch.tasks.each do |task|
                    task.update_attributes({completed: true})
                end
            end
        else
            render plain: 'Not signed in'
        end

    end

    def destroy
        if user_signed_in?
            batch = Batch.find(params[:id])
            if batch
                batch.destroy
                render plain: 'successful deletion'
            end
        else
            render status: 403, plain: 'Not signed in'
        end

    end

    def batch_params
        params.require(:batch).permit(:name, :ferment, :completed, :description, :start_date)
    end

end
