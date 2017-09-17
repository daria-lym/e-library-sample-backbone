/** Create a home page and fill it with content */
const HomePage = Backbone.View.extend({
        tagName: 'div',
        className: 'home page',
        events: {
            'click #searchBtn': 'searchUrl'
        },

        /**
         * Creates a new HomePage instance
         *
         */
        initialize: function() {},

        /**
         * This will append the html from file home.html
         * along with the current one into the DOM
         *
         * @returns {Object} - html from home.html
         *
         */
        render: function() {
            $.get('src/pages/home-page/home.html').done(tpl => this.$el.html(_.template(tpl)()));
            return this;
        },

        /**
         * Method that navigate to a search page
         *
         */
        searchUrl: function() {
            Backbone.history.navigate('search', true);
            //$('li.favorite').css('display', 'block');
        }
    });
