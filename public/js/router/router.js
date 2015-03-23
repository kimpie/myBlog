var app = app || {};

(function () {
        'use strict';


        var AppRouter = Backbone.Router.extend({
                routes: {
                        "posts/:id": "post",
                        "new": "create",
                        "about": "aboutPage"
                },

                initialize: function () {
                    console.log('Router is initialized.');
                    app.AppView.vent.trigger('notice');
                },

                post: function (id) {
                    console.log('Router on page ' + id);
                    app.AppView.vent.trigger('loadPost', id);
                    app.AppView.vent.trigger('hideN');
                },

                create: function(){
                    console.log('Router on new');
                    app.AppView.vent.trigger('newPost');
                },

                about: function(){
                    app.AppView.vent.trigger('about');
                    app.AppView.vent.trigger('hideN');
                }

        });

        app.AppRouter = new AppRouter();

        Backbone.history.start();
})();