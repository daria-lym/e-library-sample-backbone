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
        className: 'panel-group',
        /**
         * Creates a new NavBar instance
         * @constructs
         * @extends Backbone.View
         * @param {{}} params - Backbone.View options
         */
        initialize: function(params) {
            this.params = params;
        },
        /**
         * This will append the html from file list.html && list-item.view.js
         * along with the current one into the DOM
         * @member {Object} library - total collection of books
         * @returns {Object} - html from list.html && list-item.view.js
         */
        render: function() {
            $.get('src/components/list/list.html').done(tpl => {
                this.$el.html(_.template(tpl)(this.params));
                library.slice(-10).forEach((book) => {
                    let items = book.toJSON();
                    this.$el.append(new ListItem({
                        items
                    }).render().el);
                }, this);
            });
            return this;
        }
    });
