const NavBar = Backbone.View.extend(
    /** @lends NavBar.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'container-fluid',
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
         * This will append the html from file navbar.html
         * along with the current one into the DOM
         */
        render: function() {
            /**
             * Method that get html from file navbar.html
             * @param {String} - path to file navbar.html
             */
            $.get('src/components/navbar/navbar.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));
            /**
             * @exports module NavBar
             */
            return this;
        }
    });
