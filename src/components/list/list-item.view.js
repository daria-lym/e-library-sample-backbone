const ListItem = Backbone.View.extend({
        tagName: 'div',
        className: 'panel panel-primary',
        /**
         * Creates a new ListItem instance
         *
         * @constructs
         * @param {Object} book - one book from response in JSON
         */
        initialize: function(book) {
            this.book = book.toJSON();
        },
        /**
         *
         * This will append the html from file list-item.html
         * along with the current one into the DOM
         *
         * @returns {Object} - html from list-item.html
         */
        render: function() {
            $.get('src/components/list/list-item.html').done(tpl => this.$el.append(_.template(tpl)(this.book)));
            return this;
        }
    });
