var app = app || {};

(function ($) {
        'use strict';

	app.noticeView = Backbone.View.extend({

		template: Handlebars.compile(
			'<h1>Thanks for visiting!</h1>'
		),

		initialize: function  (options) {
			console.log('noticeView is on');
		},

		render: function () {
			console.log('render happening');
			this.$el.html(this.template());
			return this;
		}

	});

})(jQuery);