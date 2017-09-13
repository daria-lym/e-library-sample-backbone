/** Create a search form on the search page*/
const SearchForm = Backbone.View.extend({
        tagName: 'div',
        className: 'search-form input-group',
        /**
         * Creates a new SearchForm instance
         *
         */
        initialize: function() {},
        /**
         * This will append the html from file search-form.html
         * along with the current one into the DOM
         *
         * @returns {Object} - html from search-form.html
         *
         */
        render: function() {
            $.get('src/components/forms/search/search-form.html').done(tpl => this.$el.html(_.template(tpl)(this)));
            return this;
        }
    });
