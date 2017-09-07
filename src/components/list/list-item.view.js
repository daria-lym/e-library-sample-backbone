const ListItem = Backbone.View.extend(
    /** @lends NavBar.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'col-sd-12 col-md-6 col-lg-4',
        /**
         * Creates a new NavBar instance
         * @constructs
         * @extends Backbone.View
         * @member {Object} params - one book from response in JSON
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
            $.get('src/components/list/list-item.html').done(tpl => {
                this.$el.append(_.template(tpl)(this.params));
            });
            return this;
        }
    });
