var app = app || {};

(function ($) {
        'use strict';

	app.listView = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row" id="postList">'+
				'{{#each model}}'+
				'<div class="col-md-12" id="title"><h2>{{postTitle}}</h2></div>' +
				'{{/each}}'+
			'</div>'
		),

		initialize: function  (options) {
			this.collection = options.collection;
			console.log('post view initialized with ');
			console.log(this.collection);
		},

		render: function () {
			console.log('render happening');
			this.$el.html(this.template(this.collection));
			return this;
		}

	});

})(jQuery);