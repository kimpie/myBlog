var app = app || {};

(function ($) {
        'use strict';

	app.postView = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row">'+
			'<div class="col-md-12" id="title">{{title}}</div>' +
			'<div class="col-md-12" id="body">'+
				'{{body}}'+
					'{{#each p}}'+
					'<p class="lead"></p>'+
					'{{/each}}'+
				'{{/body}}'+
			'</div>' +
			'</div>'
		),

		initialize: function  (options) {
			this.model = options.model;
			console.log('post view initialized with ');
			console.log(this.model);
			this.model.bind("change", this.render, this);
			this.model.bind("reset", this.render);
		},

		render: function () {
			console.log('render happening');
			this.$el.html(this.template(this.model.attributes));
			return this;
		}

	});

})(jQuery);