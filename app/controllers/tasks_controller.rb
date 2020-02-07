class TasksController < ApplicationController

    def index
        if user_signed_in?
            tasks = current_user.tasks.sort_by { |v| v.due }
            render json: tasks
        else
            render status: 403, plain: 'Not signed in'
        end
    end

    def create
        # alternate: batch = Batch.find(params[:id]) & batch.tasks.create...
        # if batch's id is in the parameters.
        if user_signed_in?
            task = Task.create(task_params)
            if task.valid?
                render json: task
            else
                render json: task.errors
            end
        else
            render status: 403, plain: 'Not signed in'
        end
    end

    def update
        if user_signed_in?
            task = Task.find(params[:id])
            if task
                task.update(task_params)
                render json: task
            end
        else
            render plain: 'not signed in'
        end
    end

    def destroy
        if user_signed_in?
            task = Task.find(params[:id])
            if task
                task.destroy
                render plain: 'successful deletion'
            end
        else
            render status: 403, plain: 'Not signed in'
        end
    end

    def task_params
        params.require(:task).permit(:batch_id, :title, :description, :completed, :due)
    end

end
