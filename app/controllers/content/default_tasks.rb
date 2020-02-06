$default_tasks = {
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
