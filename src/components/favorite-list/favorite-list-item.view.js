/** Create one item of the content to filling the search page*/
const FavoriteListItem = Backbone.View.extend({
    tagName: 'div',
    className: 'col-xs-6 col-sd-6 col-md-4 col-lg-3',

    /**
     * Creates a new ListItem instance
     *
     * @constructs
     * @param {Object} book - one book from response in JSON
     *
     */
    initialize: function(book) {
        this.book = book.toJSON();
    },
    /**
     * This will append the html from file list-item.html
     * along with the current one into the DOM
     *
     * @returns {Object} - html from list-item.html
     *
     */
    render: function() {
        $.get('src/components/favorite-list/favorite-list-item.html').done(tpl => this.$el.append(_.template(tpl)(this.book)));
        return this;
    }
});
