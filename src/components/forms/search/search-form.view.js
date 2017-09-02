const SearchForm = Backbone.View.extend(
    /** @lends NavBar.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'search-form',
        /**
         * Creates a new NavBar instance
         * @constructs 
         * @extends Backbone.View        
         */
        initialize: function() {},
        /**
         * This will append the html from file search-form.html
         * along with the current one into the DOM
         * @returns {Object} - html from search-form.html
         */
        render: function() {
            $.get('src/components/forms/search/search-form.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));
            return this;
        }
    });
