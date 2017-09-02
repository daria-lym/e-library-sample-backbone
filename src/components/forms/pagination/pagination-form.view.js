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
         * Creates a new NavBar instance
         * @constructs
         * @extends Backbone.View
         */
        events: {
            'click [data-id = "prev"]': 'showPrev',
            'click [data-id = "more"]': 'showMore',
            'click [data-id = "next"]': 'showNext'
        },
        initialize: function() {
            this.counter = STEP;
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

        showPrev: function() {
            this.counter -= STEP;
            this.disabledBtn();
            this.removePanels();
            this.checkData(this.counter - STEP, this.counter);
        },
        showMore: function() {
            this.checkData(this.counter, this.counter + STEP);
            this.counter += STEP;

        },
        showNext: function() {
            this.enableBtn();
            this.removePanels();
            this.checkData(this.counter, this.counter + STEP);
            this.counter += STEP;
        },
        syncData: function() {
            Collections.books.once('sync', () => {
                let lib = Collections.books.toJSON();
                $('.pagination').before(new List(lib).render().el);
                Collections.library.add(Collections.books.models);
            });
            let query = Collections.books.query;
            Collections.books.url = fullUrl(query, this.counter, STEP);
            Collections.books.fetch();
        },
        libData: function(start, stop) {
            let lib = Collections.library.toJSON().slice(start, stop);
            $('.pagination').before(new List(lib).render().el);
        },
        checkData: function(start, stop) {
            (this.counter == Collections.library.length) ? this.syncData(): this.libData(start, stop);
        },
        enableBtn: function() {
            if ($('button.disabled')) $('[data-id = "prev"]').attr('class', 'btn btn-default');
        },
        disabledBtn: function() {
            if (this.counter == STEP) $('[data-id = "prev"]').attr('class', 'btn btn-default disabled');
        },
        removePanels: function() {
            if ($('.panel-group')) $('.panel-group').remove()
        }
    });
