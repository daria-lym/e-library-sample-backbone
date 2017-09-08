const Books = Backbone.Collection.extend({
        model: Book,
        parse: response => response.items,
        url: 'https://www.googleapis.com/books/v1/volumes',
        fetch: function (params) {
            const STEP = 12;
            const text = (params && params.text) || 'test';
            const page = (params && params.page) || 1;

            if (params.url === undefined) {
                params.url = `${this.url}?q=${text}&startIndex=${page * STEP}&maxResults=${STEP}`;
            }

            return Backbone.Collection.prototype.fetch.call(this, params);
        },
    }
);
