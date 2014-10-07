var app = app || {};

(function ($) {
        'use strict';

	app.postView = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row" id="text">'+
				'<div class="col-md-12" id="title"><h2>{{postTitle}}</h2></div>' +
				'<div class="col-md-12" id="body">'+
					'{{#each pbody}}'+
						'<p class="lead">{{p}}</p>'+
						'<h3>{{h3}}</h3>'+
						'{{#if img}}<img src="{{img}}">{{/if}}'+
					'{{/each}}'+
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