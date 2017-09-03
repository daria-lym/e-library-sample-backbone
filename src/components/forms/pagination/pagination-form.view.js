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
            if (e.target.classList.contains('disabled')) return;
            this.params.page--;
            Backbone.history.navigate(`search/${this.params.query}/${this.params.page}`);
            this.disabledBtn();
            this.removePanels();
            this.checkData((this.params.page * STEP) - STEP, this.params.page * STEP);
        },
        /**
         * Method that adds 10 following books
         * @fires SearchPage#showMore
         */
        showMore: function() {
            Backbone.history.navigate(`search/${this.params.query}/${this.params.page + 1}`);
            this.checkData(this.params.page * STEP, (this.params.page * STEP) + STEP);
            this.params.page++;

        },
        /**
         * Method that showing the 10 following books
         * @fires SearchPage#showNext
         */
        showNext: function() {
            this.enableBtn();
            this.removePanels();
            Backbone.history.navigate(`search/${this.params.query}/${this.params.page + 1}`);
            this.checkData(this.params.page * STEP, (this.params.page * STEP) + STEP);
            this.params.page++;
        },
        /**
         * Method that fills a library collection
         * with books that are not yet there
         * @member {String} query - contains the name
         * of the current search query
         * @member {String} lib - contains the last
         * 10 books of the current request
         *
         */
        syncData: function() {
            Collections.books.once('sync', () => {
                let lib = Collections.books.toJSON();
                $('.pagination').before(new List(lib).render().el);
                Collections.library.add(Collections.books.models);
            });
            Collections.books.url = fullUrl(this.params.query, this.params.page * STEP, STEP);
            Collections.books.fetch();
        },
        /**
         * Method that loads data from a library collection
         * @param {Number} start - the number of the object
         * from which to start the selection
         * @param {Number} stop - the number of the object
         * on which to complete the selection
         */
        libData: function(start, stop) {
            let lib = Collections.library.toJSON().slice(start, stop);
            $('.pagination').before(new List(lib).render().el);
        },
        /**
         * Method that verifies the availability
         * of data in the library collection
         * @param {Number} start - the number of the object
         * from which to start the selection
         * @param {Number} stop - the number of the object
         * on which to complete the selection
         */
        checkData: function(start, stop) {
            (this.params.page * STEP == Collections.library.length) ? this.syncData(): this.libData(start, stop);
        },
        /**
         * The method that makes the previous button enable
         */
        enableBtn: function() {
            if ($('.disabled')) $('[data-id = "prev"]').attr('class', 'btn btn-default');
        },
        /**
         * The method that makes the previous button disable
         */
        disabledBtn: function() {
            if (this.params.page == 1) $('[data-id = "prev"]').attr('class', 'btn btn-default disabled');
        },
        /**
         * cleaning the page from previous results
         */
        removePanels: function() {
            if ($('.panel-group')) $('.panel-group').remove()
        }
    });
