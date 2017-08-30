const MainRouter = Backbone.Router.extend({
    routes: {
        'search(/:str)(/:page)': 'search',
        '*path': 'default'
    },

    initialize: options => {},

    default: () => {
        Views.HomePage = new HomePage({});
        $('div.container').empty().append(Views.HomePage.render().el);

    },

    search: (str, page) => {
        Views.SearchPage = new SearchPage({
            str,
            page
        });
        $('div.container').empty().append(Views.SearchPage.render().el);
    }
});

$(() => {
    const app = new MainRouter();
    Backbone.history.start();
});

Views = {};
