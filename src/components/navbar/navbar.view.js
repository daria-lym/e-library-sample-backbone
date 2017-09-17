/** Create the NavBar content of all pages*/
const NavBar = Backbone.View.extend({
    tagName: 'div',
    className: 'container-fluid',
    events: {
        'click .favorite': 'showFavorite',
        'click .back-to-search': 'showSearch'
    },
    /**
     * Creates a new NavBar instance
     *
     */
    initialize: function() {
        this.scrollInit();        
    },
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
    },

    /**
     * Method that show and hide scroll button
     * and add listener to button click
     *
     */
    scrollInit: function() {
        $((f) => {
            let el = f('#on-top');
            f(window).scroll(function() {
                el['fade' + (f(this).scrollTop() > 200 ? 'In' : 'Out')](500);
            });
        });
        document.querySelector('#on-top').addEventListener('click', () => this.top());
    },
    showFavorite: () => Backbone.history.navigate('favorite', true),
    showSearch: () => Backbone.history.navigate('search', true)
});
