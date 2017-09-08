const List = Backbone.View.extend({
    tagName: 'div',
    className: 'panel-group',
    /**
     * Creates a new NavBar instance
     *
     * @constructs
     * @param {Object[]} books - collection of books
     *
     */
    initialize: function (books) {
        this.books = books;
    },
    /**
     * This will append the html from file list.html && list-item.view.js
     * along with the current one into the DOM
     *
     * @returns {Object} - html from list.html && list-item.view.js
     */
    render: function () {
        this.books.map(book => this.$el.append(new ListItem(book).render().el));
        return this;
    }
});
