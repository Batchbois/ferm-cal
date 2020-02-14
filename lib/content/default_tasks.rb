$default_tasks = {
    'beer' => [
        {
            title: 'Beer: Initial gravity check',
            description: 'Check specific gravity and record in notes',
            completed: false,
            due: 5
        },
        {
            title: 'Beer: Secondary starts',
            description: 'Check specific gravity to ensure it\'s finished, record, and transfer beer off of trub and dry-hop if ready/required',
            completed: false,
            due: 7
        },
        {
            title: 'Beer: End of secondary',
            description: 'Rack off of hops if relevant',
            completed: false,
            due: 10
        },
        {
            title: 'Beer: Packaging',
            description: 'Bottle or keg beer for carbonation and consumption',
            completed: false,
            due: 14
        }
    ],
    'pickle' => [
        {
            title: 'Pickle: Burp pickles',
            description: 'Burp jars. Check for and remove any surface mold',
            completed: false,
            due: 3
        },
        {
            title: 'Pickle: Taste test',
            description: 'Burp jars &  taste test! If they taste done, refrigerate.',
            completed: false,
            due: 7
        },
        {
            title: 'Pickle: Final step',
            description: 'Taste test and refrigerate or cellar',
            completed: false,
            due: 10
        }
    ]
}
