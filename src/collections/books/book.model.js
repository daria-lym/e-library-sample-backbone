/** Create a model of the one book of collection*/
const Book = Backbone.Model.extend({
        
        defaults: {
            title: 'Top secret (apparently).',
            author: 'Your name could be here.',
            category: 'Not like everyone else.',
            publisher: 'Did not pay for advertising.',
            date: 'It was a long time ago in a galaxy far far away...',
            description: 'If you read this we will have to kill you. Enjoy!',
            img: 'assets/img/Cover.gif',
            id: '0',
            url: ''
        },
        /**
         * @param {Object} book - one object requested from the server
         * @returns {Object} - one instance of the model
         *
         */
        parse: (book) => {
            return {
                title: book.volumeInfo.title,
                author: (book.volumeInfo.authors) ? book.volumeInfo.authors.join(', ') : 'Your name could be here.',
                category: (book.volumeInfo.categories) ? book.volumeInfo.categories.join(', ') : 'Not like everyone else.',
                publisher: book.volumeInfo.publisher,
                date: book.volumeInfo.publishedDate,
                description: book.volumeInfo.description,
                img: (!book.volumeInfo.imageLinks || !book.volumeInfo.imageLinks.thumbnail) ?
                    'assets/img/Cover.gif' : book.volumeInfo.imageLinks.thumbnail,
                id: book.id
            };
        }
    });
