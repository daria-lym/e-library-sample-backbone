const HomePage = Backbone.View.extend({
    tagName: 'div',
    className: 'home page',
    initialize: function (params) {
        this.params = params;
    },
    render: function () {
        $.get('src/home-page/home.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));

        return this;
    }
});