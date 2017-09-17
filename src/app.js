/** Creating an application Router */
const MainRouter = Backbone.Router.extend({
    routes: {
        'search(/:text)(/:page)': 'search',
        'favorite(/:text)(/:page)': 'favorite',
        '*path': 'default'
    },

    /**
     * Creates a navbar on a page
     *
     */
    initialize: options => $('div.navbar').append(new NavBar().render().el),

    /**
     * Creates a home page and render it
     *
     */
    default: () => $('div.container').html(new HomePage().render().el),

    /**
     * Method that creates a search page and render it
     *
     * @param {String} text - query value
     * @param {Number} page - number of the page
     *
     */
    search: function(text, page) {
        this.showHideTabs('li.favorite', 'li.back-to-search');
        $('div.container').html(new SearchPage({
            text,
            page
        }).render().el);

    },
    /**
     * Method that creates a favorite page and render it
     *
     * @param {String} text - query value
     * @param {Number} page - number of the page
     *
     */
    favorite: function(text, page) {
        $('div.container').html(new FavoritePage().render().el);
        this.showHideTabs('li.back-to-search', 'li.favorite');
    },
    /**
     * Method that show or hide tabs of routes to the favorite and search pages
     *
     * @param {String} show - selector of element, that must be shown
     * @param {String} hide - selector of element, that must be hidden
     *
     */
    showHideTabs: (show, hide) => {
        $(show).css('display', 'block');
        $(hide).css('display', 'none');
    }
});

/**
 * Method that creates a new Router and start history
 *
 */
$(() => {
    new MainRouter();
    Backbone.history.start();
});
