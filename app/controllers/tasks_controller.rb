class TasksController < ApplicationController

    def index
        if user_signed_in?
            tasks = current_user.tasks
            render json: tasks
        else
            render status: 403, plain: 'Not signed in'
        end
    end

    def create
        # alternate: batch = Batch.find(params[:id]) & batch.tasks.create...
        # if batch's id is in the parameters.
        task = Task.create(task_params)
        if task.valid?
            render json: task
        else
            render json: task.errors
        end
    end

    def task_params
        params.require(:task).permit(:batch_id, :title, :description, :completed)
    end

end
