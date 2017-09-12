/** Create a search page and fill it with content */
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
     *
     */
    initialize: function(params) {
        this.page = 1;
        this.text = '';
        this.params = params;
        this.books = new Books();
        this.books.on('sync', (collection, r, params) => {
            this.renderList(collection.models, params.url);
        });
    },

    /**
     * This will append the html from file search.html
     * along with the current one into the DOM
     *
     * @returns {Object} - html from search.html && search components
     *
     */
    render: function() {
        this.$el.append(new SearchForm(this.params).render().el);
        $.get('src/pages/search-page/search.html').done(tpl => this.$el.append(_.template(tpl)(this)));
        return this;
    },

    /**
     * Method triggered by a new search
     *
     * @param {Object} e - get value of current event
     *
     */
    search: function(e) {
        $('.pagination').css('display', 'block');
        $('.row-items').remove();        
        this.page = 1;
        this.text = ($(e.target).hasClass('search-lg')) ?
            $('.search-input-lg').val() : $('.search-input-sd').val();
        this.fetch(true);
    },

    /**
     * Method triggered by a continue of the search
     *
     */
    loadMore: function() {
        ++this.page;
        this.fetch();
    },

    /**
     * Method requesting data to fill the collection,
     * triggered by the search process
     *
     */
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
     *
     * @param {Object}  books - collection of all responsed books
     * @param {String} url - path of a current response
     *
     */
    renderList: function(books, url) {
        this.$el.find('.content').append(new List(books.slice(-12), url).render().el);
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
