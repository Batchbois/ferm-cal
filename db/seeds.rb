# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

seed_users = [
    {
        email: 'brenden@brenden.brenden',
        password: 'password',
        password_confirmation: 'password',
        display_name: 'BBartaDude'
    },
    {
        email: 'sam@sam.sam',
        password: 'password',
        password_confirmation: 'password',
        display_name: 'samboozle'
    }
]
users = seed_users.each do |user|
    User.where(email: user[:email]).first_or_create(user)
    # User.create(user)
end

pp "#{User.count} users"

actual_users = User.all

batches = actual_users.each do |user|
    example_batch = { name: 'Example Batch', ferment: 'beer', completed: false, description: 'This is a seeded task.' }
    user.batches.where(example_batch).first_or_create do |batch|
        batch.start_date = Date.today
    end
end

pp "#{Batch.count} batches"

actual_batches = Batch.all

tasks = actual_batches.each do |batch|
    example_task = {
        title: 'First placeholder beer task',
        description: 'This task is a placeholder beer task!',
        completed: false,
    }
    batch.tasks.where(example_task).first_or_create do |task|
        task.due = 3.days.since(batch[:start_date]).noon.to_datetime
    end
end

pp "#{Task.count} tasks"
