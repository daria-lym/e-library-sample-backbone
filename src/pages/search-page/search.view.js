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
        className: 'search-page',
        /**
         * showBooks event.
         * @event SearchPage#showBooks
         */
        events: {
            'click .search-confirm': 'showBooks'
        },
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
         * @returns {Object} - html from search.html && search components
         */
        render: function() {
            this.$el.append(new SearchForm().render().el);
            return this;
        },
        /**
         * Method that start of filling a collection
         * @fires SearchPage#showBooks
         * @member {Object} books - instance of the collection
         * @member {Object} lib - collection in JSON format
         * which are filling from response
         */
        showBooks: function() {
            Collections.books.fetch();
            Collections.books.on('sync', () => {
                let lib = Collections.books.toJSON();
                this.$el.append(new List(lib).render().el)
            });
        }
    });
