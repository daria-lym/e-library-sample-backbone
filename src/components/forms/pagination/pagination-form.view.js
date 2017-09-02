const PaginationForm = Backbone.View.extend(
    /** @lends PaginationForm.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'pagination',
        /**
         * Creates a new NavBar instance
         * @constructs
         * @extends Backbone.View
         */
        events: {
            'click [data-id = "prev"]': 'showPrev',
            'click [data-id = "more"]': 'showMore',
            'click [data-id = "next"]': 'showNext'
        },
        initialize: function() {},
        /**
         * This will append the html from file pagination-form.html
         * along with the current one into the DOM
         * @returns {Object} - html from pagination-form.html
         */
        render: function() {
            $.get('src/components/forms/pagination/pagination-form.html').done(tpl => this.$el.html(_.template(tpl)(this)));
            return this;
        },
        showPrev: function() {
            console.log(1)
        },
        showMore: function() {
            console.log(2)
        },
        showNext: function() {
            console.log(3)
        }
    });
