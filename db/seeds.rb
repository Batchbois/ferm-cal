# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
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

users.each { |user| User.first_or_create(user) }

batches = [
    {
        name: 'The Sourest Kraut',
        user_id: 1,
        ferment: 'pickle',
        completed: false,
        description: 'yummy yummy sauerkraut'
    },
    {
        name: 'Kimchi',
        user_id: 2,
        ferment: 'pickle',
        completed: true,
        description: 'spicy!'
    },
    {
        name: 'Mister Beerman',
        user_id: 1,
        ferment: 'beer',
        completed: false,
        description: 'Please, mr beer was my father. Call me Benjamin.'
    }
]

batches.each{ |batch| Batch.first_or_create(batch) }
