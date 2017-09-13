/** Create a favorite page and fill it with content */
const FavoritePage = Backbone.View.extend({
    tagName: 'div',
    className: 'favorite page',
    /**
     * Creates a new FavoritePage instance
     *
     */
    initialize: function() {},

    /**
     * This will append the html from file favorite.html
     * along with the current one into the DOM
     *
     * @returns {Object} - html from favorite.html
     *
     */
    render: function() {
        $.get('src/pages/favorite-page/favorite.html').done(tpl => this.$el.html(_.template(tpl)()));
        return this;
    },

    /**
     * Method that navigate to a search page
     *
     */
    searchUrl: function() {
        Backbone.history.navigate('search', true);
    }
});
