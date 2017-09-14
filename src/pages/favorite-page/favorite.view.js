/** Create a favorite page and fill it with content */
const FavoritePage = Backbone.View.extend({
    tagName: 'div',
    className: 'favorite page',
    events: {
        'click .icon-heart-logo': 'renderList',
        'click .openModal': 'showModal'
    },
    /**
     * Creates a new FavoritePage instance
     *
     */
    initialize: function() {
        this.books = new Favorits();
        for (let key in localStorage) {
            let book = JSON.parse(localStorage[key]);
            this.books.push(book);
        };
    },

    /**
     * This will append the html from file favorite.html
     * along with the current one into the DOM
     *
     * @returns {Object} - html from favorite.html
     *
     */
    render: function() {
        $.get('src/pages/favorite-page/favorite.html').done(tpl => this.$el.html(_.template(tpl)()));
        return this;
    },
    /**
     * Method that start of filling a collection
     *
     * @param {Object}  books - collection of all responsed books
     *
     */
    renderList: function() {
        if (this.books.length > 0) {
            this.$el.find('.content').html(new FavoriteList(this.books).render().el);
        }
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
