const Book = Backbone.Model.extend(
    /** @lends Book.prototype */
    {
        /**
         * @param {Object} defaults - indicates the primary key of the model
         * @param {String} - default attributes for this model
         */
        defaults: {
            title: 'Top secret (apparently).',
            author: 'Your name could be here.',
            category: 'Not like everyone else.',
            publisher: 'Did not pay for advertising.',
            date: 'It was a long time ago in a galaxy far far away...',
            description: 'If you read this we will have to kill you. Enjoy!',
            img: 'i/Cover.gif',
            id: '0'
        },
        parse: (book) => {
            return {
                title: book.volumeInfo.title,
                author: (book.volumeInfo.authors) ? book.volumeInfo.authors.join(', ') : false,
                category: (book.volumeInfo.categories) ? book.volumeInfo.categories.join(', ') : false,
                publisher: book.volumeInfo.publisher,
                date: book.volumeInfo.publishedDate,
                description: book.volumeInfo.description,
                img: book.volumeInfo.imageLinks.thumbnail,
                id: book.id
            };
        }

    });
