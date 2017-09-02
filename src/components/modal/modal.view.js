const Modal = Backbone.View.extend(
    /** @lends Modal.prototype */
    {
        /**
         * This will append the tagName and className
         * along with the current one into the DOM
         * @member {String} tagName - the tag of the element
         * @member {String} className - the class attribute of the element
         */
        tagName: 'div',
        className: 'modal-dialog',
        /**
         * Creates a new NavBar instance
         * @constructs
         * @extends Backbone.View
         * @param {{}} params - Backbone.View options
         */
        initialize: function(params) {
            this.params = params;
        },
        /**
         * This will append the html from file modal.html
         * along with the current one into the DOM
         * @returns {Object} - html from modal.html
         */
        render: function() {
          console.log(this.params);
          $.get('src/components/modal/modal.html').done(tpl => {
              this.$el.append(_.template(tpl)(this.params));
          });
          return this;
        }
    });
