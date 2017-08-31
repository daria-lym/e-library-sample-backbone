const Library = Backbone.Collection.extend(
    /** @lends Library.prototype */
    {
        /**
         * @member {Object} Book - model from book.model.js 
         */
        model: Book
    });
