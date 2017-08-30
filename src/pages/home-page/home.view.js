const HomePage = Backbone.View.extend({
    tagName: 'div',
    className: 'home page',
    events: {
          'click #searchBtn': 'searchUrl'
      },
    initialize: function(params) {
        this.params = params;
    },
    render: function() {
        $.get('src/pages/home-page/home.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));

        return this;
    },
    searchUrl: function() {
        Backbone.history.navigate('search', true);
    }
});
