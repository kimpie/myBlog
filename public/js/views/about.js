var app = app || {};

(function ($) {
        'use strict';

	app.aboutView = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row" id="text">'+
				'<div class="col-md-12" id="title"><h2>About</h2></div>' +
				'<div class="col-md-12" id="body">'+
					'<p>This is the about page.</p>'+
				'</div>' +
			'</div>'
		),

		initialize: function  (options) {
			this.model = options.model;
			console.log('about view initialized with ');
			console.log(this.model);
			this.model.bind("change", this.render, this);
			this.model.bind("reset", this.render);
		},

		render: function () {
			console.log('render happening');
			this.$el.html(this.template);
			return this;
		}

	});

})(jQuery);