var app = app || {};

(function () {
        'use strict';


        var AppRouter = Backbone.Router.extend({
                routes: {
                        "posts/": "test"
                },

                initialize: function () {
                    console.log('Router is initialized.');
                    //app.AppView.vent.on('getPage', this.sendPage, this);
                },

                test: function () {
                    console.log('testing router /posts page');
                }

        });

        app.AppRouter = new AppRouter();

        Backbone.history.start();
})();