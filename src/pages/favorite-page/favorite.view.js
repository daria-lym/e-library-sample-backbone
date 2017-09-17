/** Create a favorite page and fill it with content */
const FavoritePage = Backbone.View.extend({
    tagName: 'div',
    className: 'favorite page',
    events: {
        'click .icon-heart-logo': 'renderList',
        'click .openModalF': 'showModal',
        'click .load-more-favorite': 'showMore'
    },
    /**
     * Creates a new FavoritePage instance
     *
     */
    initialize: function() {
        this.books = new Favorits();
        this.books.fetch();
    },

    /**
     * This will append the html from file favorite.html
     * along with the current one into the DOM
     *
     * @returns {Object} - html from favorite.html && favorite components
     *
     */
    render: function() {
        $.get('src/pages/favorite-page/favorite.html').done(tpl => this.$el.html(_.template(tpl)()));
        return this;
    },
    /**
     * Method that start of filling a collection
     *
     * @param {Object}  this.books - collection of all favorite books
     *
     */
    renderList: function() {
        this.step = 0;
        if (this.books.length > 0 && this.step + 12 <= this.books.length) {
            this.$el.find('.content').html(new FavoriteList(this.books.slice(this.step, this.step + 12)).render().el);
        }
        $('.pagination').css('display', 'block');
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
    },
    /**
     * Method that continue of filling a collection
     *
     * @param {Object} this.books - collection of all favorite books
     * @param {Number} this.step - counter of items per page
     *
     */
    showMore: function() {
        this.step += 12;
        if (this.books.length > this.step && this.step + 12 <= this.books.length) {
            this.$el.find('.content').append(new FavoriteList(this.books.slice(this.step, this.step + 12)).render().el);
        } else if (this.books.length > this.step && this.step + 12 > this.books.length) {
            this.$el.find('.content').append(new FavoriteList(this.books.slice(this.step, this.books.length)).render().el);
        }
    }
});
