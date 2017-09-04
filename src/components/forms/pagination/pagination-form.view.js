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
         * Search event.
         * @event SearchPage#showPrev
         * @event SearchPage#showMore
         * @event SearchPage#showNext
         */

        events: {

            'click [data-id = "prev"]': 'showPrev',
            'click [data-id = "more"]': 'showMore',
            'click [data-id = "next"]': 'showNext'
        },
        /**
         * Creates a new PaginationForm instance
         * @constructs
         * @extends Backbone.View
         */
        initialize: function(params) {
            this.params = params;
            this.params.page = Number(this.params.page);
        },
        /**
         * This will append the html from file pagination-form.html
         * along with the current one into the DOM
         * @returns {Object} - html from pagination-form.html
         */
        render: function() {
            $.get('src/components/forms/pagination/pagination-form.html').done(tpl => this.$el.html(_.template(tpl)(this)));
            return this;
        },

        /**
         * Method that showing the 10 previous books
         * @fires SearchPage#showPrev
         */
        showPrev: function(e) {
            if (this.params.page === 1) return;
            this.params.page--;
            Backbone.history.navigate(`search/${this.params.query}/${this.params.page}`);
            this.removePanels();
            this.checkData((this.params.page * STEP) - STEP);
        },
        /**
         * Method that adds 10 following books
         * @fires SearchPage#showMore
         */
        showMore: function() {
            Backbone.history.navigate(`search/${this.params.query}/${this.params.page + 1}`);
            this.checkData(this.params.page * STEP);
            this.params.page++;

        },
        /**
         * Method that showing the 10 following books
         * @fires SearchPage#showNext
         */
        showNext: function() {
            this.removePanels();
            Backbone.history.navigate(`search/${this.params.query}/${this.params.page + 1}`);
            this.checkData(this.params.page * STEP);
            this.params.page++;
        },
        /**
         * Method that fills a library collection
         * with books that are not yet there
         * @member {Number} start - start index of the book to search query
         *
         */
        syncData: function(start) {            
            Collections.books.url = fullUrl(this.params.query, start, STEP);
            Collections.books.fetch();
        },
        /**
         * Method that loads data from a library collection
         * @param {Number} start - the number of the object
         * from which to start the selection
         */
        libData: function(start) {
            let lib = Collections.library.toJSON().slice(start, start + STEP);
            $('.pagination').before(new List(lib).render().el);
        },
        /**
         * Method that verifies the availability
         * of data in the library collection
         * @param {Number} start - the number of the object
         * from which to start the selection
         * @member {String} url - path to be checked for collection
         * @member {Object} lib - collection of all books in JSON format
         * @member {Object} target - the existence of this object indicates
         * a presence of the query in the collection
         * @member {Number} i - index of target in lib
         */
        checkData: function(start) {
            let url = fullUrl(this.params.query, start, STEP);
            let lib = Collections.library.toJSON();
            let target = lib.find((item) => {
                return item.url === url;
            });
            let i = lib.indexOf(target);
            (!target) ? this.syncData(start): this.libData(i);
        },
        /**
         * cleaning the page from previous results
         */
        removePanels: function() {
            if ($('.panel-group')) $('.panel-group').remove()
        }
    });
