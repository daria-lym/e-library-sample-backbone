/** Create the instance of favorite books collection*/
const Favorits = Backbone.Collection.extend({
    model: Book,
    fetch: function() {
        for (let key in localStorage) {
            if (key.length === 12) this.add(JSON.parse(localStorage[key]));
        }        
    }
});
