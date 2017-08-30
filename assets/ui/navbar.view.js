const NavBar = Backbone.View.extend({
    tagName: 'div',
    className: 'container-fluid',
    initialize: function (params) {
        this.params = params;
    },
    render: function () {
        $.get('assets/ui/navbar.html').done(tpl => this.$el.html(_.template(tpl)(this.params)));

        return this;
    }
});
