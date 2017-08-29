const MainRouter = Backbone.Router.extend({
    routes: {
        'search(/:str)(/:page)': 'search',
        '*path': 'default'
    },

    initialize: options => {},

    default: () => {
        // TODO: Please, create home page
        if (!Views.HomePage) Views.HomePage = new HomePage({name: 'Dmitriy'});

        $('body').append(Views.HomePage.render().el);

    },

    search: (str, page) => {
        // TODO: Please, create search page
        if (!Views.SearchPage) Views.SearchPage = new SearchPage({str, page});

        $('body').append(Views.SearchPage.render().el);
    }
});

$(() => {
    const app = new MainRouter();
    Backbone.history.start();
});

Views = {};
