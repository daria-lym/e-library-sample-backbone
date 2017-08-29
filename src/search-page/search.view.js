const SearchPage = Backbone.View.extend({
    tagName: 'div',
    className: 'search page',
    initialize: function (params) {
        this.params = params;
    },
    render: function () {
        $.get('src/search-page/search.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));

        return this;
    }
});