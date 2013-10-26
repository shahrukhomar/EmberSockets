(function ($app) {

    "use strict";

    $app.IndexController = Ember.Controller.extend({

        /**
         * @property actions
         * @type {Object}
         */
        actions: {

            /**
             * @method cherryPickName
             * @emit cherryPickName
             * @return {void}
             */
            cherryPickName: function() {
                this.socket.emit('cherryPickName');
            }

        },

        /**
         * @property sockets
         * @type {Object}
         */
        sockets: {
            cherryPickedName: 'name'
        },

        /**
         * @property name
         * @type {String}
         */
        name: 'Adam',

        /**
         * @computedProperty randomName
         * @param event {Object}
         * @return {String}
         */
        randomName: function() {
            return this.get('name');
        }.property('name')

    });

})(window.App);