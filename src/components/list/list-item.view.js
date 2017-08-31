const ListItem = Backbone.View.extend(
    /** @lends NavBar.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         */
        tagName: 'li',
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
         * This will append the html from file list-item.html
         * along with the current one into the DOM
         * @returns {Object} - html from list-item.html
         */
        render: function() {
            $.get('src/components/list/list-item.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));
            return this;
        }
    });
