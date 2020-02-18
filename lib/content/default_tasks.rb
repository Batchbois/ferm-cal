$default_tasks = {
    'beer' => [
        {
            title: 'Initial gravity check',
            description: 'Check specific gravity and record in notes',
            completed: false,
            due: 5
        },
        {
            title: 'Secondary starts',
            description: 'Check specific gravity to ensure it\'s finished and record measurement. Transfer beer off of trub and dry-hop (optional) if ready. Mae sure all materials are clean!',
            completed: false,
            due: 7
        },
        {
            title: 'End of secondary',
            description: 'Rack off of hops/trub into a clean vessel (if needed)',
            completed: false,
            due: 10
        },
        {
            title: 'Packaging',
            description: 'Bottle or keg beer for carbonation and consumption. Clean all containers and instruments!!',
            completed: false,
            due: 14
        }
    ],
    'pickle' => [
        {
            title: 'Burp pickles',
            description: 'Burp jars. Check for and remove any surface mold',
            completed: false,
            due: 3
        },
        {
            title: 'Taste test',
            description: 'Burp jars &  taste test! If they taste done, refrigerate.',
            completed: false,
            due: 7
        },
        {
            title: 'Final taste test',
            description: 'Taste test and refrigerate or cellar',
            completed: false,
            due: 10
        }
    ]
}
