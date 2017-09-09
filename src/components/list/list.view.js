/** Brings together all items of the content to filling the search page*/
const List = Backbone.View.extend({
    tagName: 'div',
    className: 'row-items',
    /**
     * Creates a new NavBar instance
     *
     * @constructs
     * @param {Object[]} books - local collection of books
     * @param {String} url - path to response current collection
     *
     */
    initialize: function(books, url) {
        this.books = new Books(books);
        this.url = url;
    },
    /**
     * This will append the html from file list.html && list-item.view.js
     * along with the current one into the DOM
     *
     * @returns {Object} - html list-item.view.js
     *
     */
    render: function() {
        this.books.map(book => this.$el.append(new ListItem(book).render().el));
        return this;
    }
});
