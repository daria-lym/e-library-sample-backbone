/** Brings together all items of the content to filling the favorite page*/
const FavoriteList = Backbone.View.extend({
    tagName: 'div',
    className: 'row-items',
    /**
     * Creates a new FavoriteList instance
     *
     * @constructs
     * @param {Object[]} books - local collection of books
     *
     */
    initialize: function(books) {
        this.books = books;
    },
    /**
     * This will append the html from file favorite-list-item.view.js
     * along with the current one into the DOM
     *
     * @returns {Object} - html favorite-list-item.view.js
     *
     */
    render: function() {
        this.books.map(book => this.$el.append(new FavoriteListItem(book).render().el));
        return this;
    }
});
