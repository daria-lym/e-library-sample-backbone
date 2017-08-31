/**Creatin an application Router*/

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
         * Creates a new MainRouter instance
         * @constructs
         * @extends Backbone.Router
         * @param {Object} options - Backbone.Router options object
         */
        initialize: options => {
            Views.NavBar = new NavBar({});
            $('div.navbar').append(Views.NavBar.render().el);
        },
        /**
         * Method that creates a home page and render it
         */
        default: () => {
            Views.HomePage = new HomePage({});
            $('div.container').html(Views.HomePage.render().el);

        },

        /**
         * Method that creates a search page and render it
         * @param {String} str - query value
         * @param {Number} page - number of the page
         */
        search: (str, page) => {
            Views.SearchPage = new SearchPage({
                str,
                page
            });
            $('div.container').html(Views.SearchPage.render().el);
        }
    });

/**
 * Method that creates a new Router and start history
 */
$(() => {
    const app = new MainRouter();
    Backbone.history.start();
});
/**
 * @param {Object} Views - Clear all views
 */
Views = {};
