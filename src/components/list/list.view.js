const List = Backbone.View.extend(
    /** @lends NavBar.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'row container-fluid row-items',
        /**
         * Creates a new NavBar instance
         * @constructs
         * @extends Backbone.View
         * @member {Object} params - collection of books
         */
        initialize: function(params) {
            this.params = params;
        },
        /**
         * This will append the html from file list.html && list-item.view.js
         * along with the current one into the DOM
         * @member {Object} book - one of the each item in collection
         * @returns {Object} - html from list.html && list-item.view.js
         */
        render: function() {
            let query = $('.search-input').val();
            this.params.forEach((book) => {
                this.$el.append(new ListItem(book).render().el);
            }, this);
            return this;
        }
    });
