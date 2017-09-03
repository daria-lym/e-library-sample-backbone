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
            'click .search-confirm': 'newQuery',
            'click .openModal': 'showModal'
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
            this.$el.append(new SearchForm(this.params).render().el);
            if (this.params.str) this.showBooks(this.params.str, this.params.page);
            return this;
        },

        newQuery: function() {
            let query = $('.search-input').val();
            Backbone.history.navigate(`search/${query}/${1}`);
            Collections.library.reset();
            $('.panel-group, .pagination').remove();
            this.showBooks(query, 1);
        },
        /**
         * Method that start of filling a collection
         * @fires SearchPage#showBooks
         * @member {Object} books - instance of the collection
         * @member {Object} lib - collection in JSON format
         * which are filling from response
         */
        showBooks: function(query, page) {
            Collections.books.once('sync', () => {
                let lib = Collections.books.toJSON();
                this.$el.append(new List(lib).render().el);
                this.$el.append(new PaginationForm({query, page}).render().el);
                Collections.library.add(Collections.books.models);
            });
            Collections.books.url = fullUrl(query, (page - 1) * STEP, STEP);
            Collections.books.fetch();
        },


        showModal: function(e) {
            let target = Collections.library.toJSON().find((item) => {
                return item.id === e.target.getAttribute('data-id');
            });
            $('#modal').html(new Modal(target).render().el);
            $('#modal').modal();
        }
    });
