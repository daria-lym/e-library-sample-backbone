const url = `https://www.googleapis.com/books/v1/volumes?q=javascript&startIndex=0&maxResults=10`
const SearchPage = Backbone.View.extend(
    /** @lends SearchPage.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'search-page',
        /**
         * showBooks event.
         * @event SearchPage#showBooks
         */
        events: {
            'click .search-confirm': 'showBooks'
        },
        /**
         * Creates a new SearchPage instance
         * @constructs
         * @extends Backbone.View
         * @param {{}} params - Backbone.View options
         */
        initialize: function(params) {
            this.params = params;
        },
        /**
         * This will append the html from file search.html
         * along with the current one into the DOM
         * @returns {Object} - html from search.html && search components
         */
        render: function() {
            this.$el.append(new SearchForm({}).render().el);
            return this;
        },
        /**
         * Method that start of filling a collection
         * @fires SearchPage#showBooks
         * @member {Object} book - book model instance
         * which are filling from response
         * @member {Object} library - total collection of books
         */
        showBooks: function() {
            $.get(url).done(response => {
                for (let i = 0; i < response.items.length; i++) {
                    let book = new Book({
                        title: response.items[i].volumeInfo.title,
                        author: response.items[i].volumeInfo.authors,
                        category: response.items[i].volumeInfo.authors,
                        publisher: response.items[i].volumeInfo.publisher,
                        date: response.items[i].volumeInfo.publishedDate,
                        description: response.items[i].volumeInfo.description,
                        img: response.items[i].volumeInfo.imageLinks.thumbnail,
                        dataId: response.items[i].id
                    });
                    library.add(book);
                }
                this.$el.append(new List({}).render().el);
            });
        }
    });
