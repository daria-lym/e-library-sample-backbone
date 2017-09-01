const Books = Backbone.Collection.extend(
    /** @lends Books.prototype */
    {
        /**
         * @member {Object} Book - model from book.model.js
         */
        model: Book,
        url: 'https://www.googleapis.com/books/v1/volumes?q=javascript&startIndex=0&maxResults=10',
        parse: response => response.items
    });
