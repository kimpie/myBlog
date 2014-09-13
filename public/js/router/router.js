var app = app || {};

(function () {
        'use strict';


        var AppRouter = Backbone.Router.extend({
                routes: {
                        "posts/:id": "post"
                },

                initialize: function () {
                    console.log('Router is initialized.');
                },

                post: function (id) {
                    console.log('Router on page ' + id);
                    app.AppView.vent.trigger('loadPost', id);
                }

        });

        app.AppRouter = new AppRouter();

        Backbone.history.start();
})();