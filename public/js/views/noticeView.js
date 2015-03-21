var app = app || {};

(function ($) {
        'use strict';

	app.noticeView = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="col-md-12">'+
				'<h2 style="padding-top:20px">Welcome to my travel blog</h2>'+
				'<h3>Find the latest post below plus more from all over!</h3>'+
			'</div>'
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