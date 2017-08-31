const HomePage = Backbone.View.extend(
    /** @lends HomePage.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'home page',
        /**
         * Search event.
         * @event HomePage#search
         */

        events: {
            'click #searchBtn': 'searchUrl'
        },
        /**
         * Creates a new HomePage instance
         * @constructs
         * @extends Backbone.View
         * @param {{}} params - Backbone.View options
         */
        initialize: function(params) {
            this.params = params;
        },
        /**
         * This will append the html from file home.html
         * along with the current one into the DOM
         */
        render: function() {
            /**
             * Method that get html from file home.html
             * @param {String} - path to file home.html
             */
            $.get('src/pages/home-page/home.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));
            /**
             * @exports module HomePage
             */
            return this;
        },
        /**
         * Method that creates a search page and render it
         * @fires HomePage#search
         */
        searchUrl: function() {
            Backbone.history.navigate('search', true);
        }
    });
