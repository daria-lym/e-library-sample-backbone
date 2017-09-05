const Books = Backbone.Collection.extend(
    /** @lends Books.prototype */
    {
        /**
         * @member {Object} Book - model from book.model.js
         * @member {String} url - the path to the books on the google server
         * @method parse - receives a request specified in the url
         */
        model: Book,
        parse: response => response.items
    });
