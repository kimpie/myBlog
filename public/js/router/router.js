var app = app || {};

(function () {
        'use strict';


        var AppRouter = Backbone.Router.extend({
                routes: {
                        "posts/:id": "post",
                        "new": "create"
                },

                initialize: function () {
                    console.log('Router is initialized.');
                },

                post: function (id) {
                    console.log('Router on page ' + id);
                    app.AppView.vent.trigger('loadPost', id);
                },

                create: function(){
                    console.log('Router on new');
                    app.AppView.vent.trigger('newPost');
                }

        });

        app.AppRouter = new AppRouter();

        Backbone.history.start();
})();