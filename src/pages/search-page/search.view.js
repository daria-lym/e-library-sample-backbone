const SearchPage = Backbone.View.extend({
    tagName: 'div',
    className: 'search-page',
    events: {
        'click .search-confirm': 'search',
        'click .openModal': 'showModal',
        'click .load-more': 'loadMore'
    },
    /**
     * Creates a new SearchPage instance
     *
     * @constructs
     * @param {Object.<string, number>} params
     * @param {String} [params.text] - searched text
     * @param {Number} [params.page] - searched page
     */
    initialize: function(params) {
        this.page = 1;
        this.text = '';
        this.params = params;
        this.books = new Books();
        this.books.on('sync', collection => {
            this.renderList(collection.models)
        });
        console.log(this);
    },
    /**
     * This will append the html from file search.html
     * along with the current one into the DOM
     *
     * @returns {Object} - html from search.html && search components
     */
    render: function() {
        this.$el.append(new SearchForm(this.params).render().el);
        return this;
    },
    /**
     * Method triggered by a new search
     *
     */
    search: function(e) {        
        this.page = 1;
        this.text = ($(e.target).hasClass('search-lg')) ? $('.search-input-lg').val() : $('.search-input-sd').val();
        this.fetch(true);

    },

    loadMore: function() {
        ++this.page;
        this.fetch();
    },

    fetch: function(remove) {
        const text = this.text;
        this.books.fetch({
            page: this.page,
            text,
            remove
        });
    },
    /**
     * Method that start of filling a collection
     * @param {String} text - text that will be searched
     * @param {Number} page - page will be displayed
     */
    renderList: function(books) {
        this.$el.find('.content').append(new List(books).render().el);
    },
    /**
     * Method that show modal window
     *
     * @param {Object} e - get value of current event
     *
     */
    showModal: function(e) {
        const modalEl = $('#modal');
        const book = this.books.get(e.target.getAttribute('data-id'))
        modalEl.html(new Modal(book).render().el);
        modalEl.modal();
    }
});
