const Book = Backbone.Model.extend({
    defaults: {
        title: 'Top secret (apparently).',
        author: 'Your name could be here.',
        category: 'Not like everyone else.',
        publisher: 'Did not pay for advertising.',
        date: 'It was a long time ago in a galaxy far far away...',
        description: 'If you read this we will have to kill you. Enjoy!',
        img: 'i/Cover.gif',
        dataId: '0'
    }
});
