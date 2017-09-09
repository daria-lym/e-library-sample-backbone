/** Create the content to filling modal window on a search page*/
const Modal = Backbone.View.extend({
    tagName: 'div',
    className: 'modal-dialog',
    /**
     * Creates a new Modal instance
     *
     * @constructs
     * @param {Object} book - one book from general collection
     *
     */
    initialize: function(book) {
        this.book = book;
    },

    /**
     * This will append the html from file modal.html
     * along with the current one into the DOM
     *
     * @returns {Object} - html from modal.html
     *
     */
    render: function() {
        $.get('src/components/modal/modal.html').done(tpl => {
            this.$el.append(_.template(tpl)({
                book: this.book
            }));
        });
        return this;
    }
});
