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
            $.get('src/components/navbar/navbar.html', (data) => $('div.navbar').append(data));

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
