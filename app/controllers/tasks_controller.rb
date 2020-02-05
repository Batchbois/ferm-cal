class TasksController < ApplicationController

    def index
        if user_signed_in?
            tasks = current_user.tasks
            render json: tasks
        else
            # render status: 404, plain: 'Not signed in'
            # for now, to verify working
            tasks = Task.all
            render json: tasks
        end
    end

    def create
        task = Task.create(task_params)
    end

    def task_params
        params.require(:task).permit(:batch_id, :title, :description, :completed)
    end

end
