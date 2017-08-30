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
        if (!Views.HomePage) Views.HomePage = new HomePage({
            name: 'Dmitriy'
        });
        $('div.container').html(Views.HomePage.render().el);

    },

    search: (str, page) => {
        if (!Views.SearchPage) Views.SearchPage = new SearchPage({
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
