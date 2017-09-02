/**
 * @member {Object} library - declaration the new instance of collection
 */
Collections = {
    books: new Books()
};

/**Creating an application Router*/

const MainRouter = Backbone.Router.extend(
    /**@lends MainRouter.prototype*/
    {
        /**
         * [routes description]
         * @member {Object} - declaration of all the routes governed
         */
        routes: {
            'search(/:str)(/:page)': 'search',
            '*path': 'default'
        },
        /**
         * Method that creates a navbar on a page
         */
        initialize: options => {
            $('div.navbar').append(new NavBar().render().el);
        },
        /**
         * Method that creates a home page and render it
         */
        default: () => {
            $('div.container').html(new HomePage().render().el);
        },

        /**
         * Method that creates a search page and render it
         * @param {String} str - query value
         * @param {Number} page - number of the page
         */
        search: (str, page) => {
            const searchPage = new SearchPage({
                str,
                page
            });
            $('div.container').html(searchPage.render().el);
        }
    });

/**
 * Method that creates a new Router and start history
 */
$(() => {
    const app = new MainRouter();
    Backbone.history.start();
});
