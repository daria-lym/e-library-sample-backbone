/** Create the NavBar content of all pages*/
const NavBar = Backbone.View.extend({
        tagName: 'div',
        className: 'container-fluid',
        events: {
            'click .on-top': 'top'
        },
        /**
         * Creates a new NavBar instance
         *
         */
        initialize: function() {},
        /**
         * This will append the html from file navbar.html
         * along with the current one into the DOM
         *
         * @returns {Object} - html from navbar.html
         *
         */
        render: function() {
            $.get('src/components/navbar/navbar.html').done(tpl => this.$el.html(_.template(tpl)));
            return this;
        },
        /**
         * Method that scroll page to the top
         *
         */
        top: () => {
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        }
    });
