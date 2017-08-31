const SearchPage = Backbone.View.extend(
    /** @lends SearchPage.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'search page',
        /**
         * Creates a new SearchPage instance
         * @constructs
         * @extends Backbone.View
         * @param {{}} params - Backbone.View options
         */
        initialize: function(params) {
            this.params = params;
        },
        /**
         * This will append the html from file search.html
         * along with the current one into the DOM
         */
        render: function() {
          /**
           * Method that get html from file search.html
           * @param {String} - path to file search.html
           */
            $.get('src/pages/search-page/search.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));
            /**
             * @exports module SearchPage
             */
            return this;
        }
    });
