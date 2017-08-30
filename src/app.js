const MainRouter = Backbone.Router.extend({
    routes: {
        'search(/:str)(/:page)': 'search',
        '*path': 'default'
    },

    initialize: options => {
        Views.NavBar = new NavBar({});
        $('div.navbar').append(Views.NavBar.render().el);
    },

    default: () => {
        Views.HomePage = new HomePage({});
        $('div.container').html(Views.HomePage.render().el);

    },

    search: (str, page) => {
        Views.SearchPage = new SearchPage({
            str,
            page
        });
        $('div.container').html(Views.SearchPage.render().el);
    }
});

$(() => {
    const app = new MainRouter();
    Backbone.history.start();
});

Views = {};
