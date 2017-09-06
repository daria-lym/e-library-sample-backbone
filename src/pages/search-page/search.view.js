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
         * newSearch event.
         * @event SearchPage#newSearch
         */
        events: {
            'click .search-confirm': 'newSearch',
            'click .openModal': 'showModal'
        },
        /**
         * Creates a new SearchPage instance
         * @constructs
         * @extends Backbone.View
         * @param {Object.<string, number>} params - landmark for search and page number
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
            this.$el.append(new SearchForm(this.params).render().el);
            if (this.params.str) this.showBooks(this.params.str, this.params.page);
            return this;
        },
        /**
         * Method triggered by a new search
         * @fires SearchPage#newSearch
         * @member {String} query - get value of input paceholder
         *
         */
        newSearch: function() {
            let query = $('.search-input').val();
            Backbone.history.navigate(`search/${query}/${1}`);
            $('.panel-group, .pagination').remove();
            this.showBooks(query, 1);
        },
        /**
         * Method that start of filling a collection
         * @member {String} query - get value of input paceholder or from url
         * @member {Number} page - get number of the page from url or 1 when new search works
         * @method fullUrl - forms the path of the request
         */
        showBooks: function(query, page) {
            this.$el.append(new Pagination({
                query,
                page
            }).render().el);
            Collections.books.url = fullUrl(query, (page - 1) * STEP, STEP);
            Collections.books.fetch();
        },
        /**
         * Method that show modal window
         * @param {Object} e - get value of current event
         * @member {Object} target - determines which
         * collection object matches the event
         */
        showModal: function(e) {
            let target = Collections.library.toJSON().find((item) => {
                return item.id === e.target.getAttribute('data-id');
            });
            $('#modal').html(new Modal(target).render().el);
            $('#modal').modal();
        }
    });
