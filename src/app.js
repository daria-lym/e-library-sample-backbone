/**
 * @member {Object} books - declaration the new instance of collection Books
 * which contains the last 10 books from the query
 * @member {Object} library - declaration the new instance of collection
 * which contains all books from the query
 */
Collections = {
    books: new Books(),
    library: new Library()
};
/**
 * @member {Number} STEP - number of books in 1 query
 */
const STEP = 10;
/**
 * @method fullUrl - query path method
 * @param {String} query - query name
 * @param {Number} start - the number of the
 * book with which to start the search
 * @param {Number} STEP - number of books in the query
 * @returns {String} url - full query path
 */
const fullUrl = (query, start, STEP) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${start}&maxResults=${STEP}`;
    return (url);
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
            /*if (page > 1 && Collections.library.length == 0) {
                Backbone.history.navigate(`search`);
                str = null;
                page = null;
            };*/
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
