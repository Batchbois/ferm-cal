class BatchesController < ApplicationController
    def index
        if user_signed_in?
            batches = current_user.batches
            render json: batches.to_json(:include => :tasks)
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
        batch = current_user.batches.create(batch_params)
        if batch.valid?
            # looks for our hard-coded task presets (see below)
            default_tasks[batch[:ferment]].each {|task| batch.tasks.create(task)}
            render json: batch.to_json(include: :tasks)
        else
            render json: batch.errors
        end
    end

    def update

    end

    def destroy
    end

    def batch_params
        params.require(:batch).permit(:name, :ferment, :completed, :description)
    end

    # these default_tasks are currently hard-coded
    # and will need to be made more specific.
    # Icebox: These become configurable by the user
    # (as_)
    default_tasks = {
        'beer' => [
            {
                title: 'First placeholder beer task',
                description: 'This task is a placeholder beer task!',
                completed: false,
                due: 3.days.since(DateTime.now).noon.to_datetime
            },
            {
                title: 'Second placeholder beer task',
                description: 'This task is a placeholder beer task!',
                completed: false,
                due: 7.days.since(DateTime.now).noon.to_datetime
            },
            {
                title: 'Third placeholder beer task',
                description: 'This task is a placeholder beer task!',
                completed: false,
                due: 10.days.since(DateTime.now).noon.to_datetime
            }
        ],
        'pickle' => [
            {
                title: 'First placeholder pickle task',
                description: 'This task is a placeholder beer task!',
                completed: false,
                due: 3.days.since(DateTime.now).noon.to_datetime
            },
            {
                title: 'Second placeholder pickle task',
                description: 'This task is a placeholder beer task!',
                completed: false,
                due: 7.days.since(DateTime.now).noon.to_datetime
            },
            {
                title: 'Third placeholder pickle task',
                description: 'This task is a placeholder beer task!',
                completed: false,
                due: 10.days.since(DateTime.now).noon.to_datetime
            }
        ]
    }
end
