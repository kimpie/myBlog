var app = app || {};

(function ($) {
        'use strict';

	Handlebars.registerHelper('cat', function(models) {
		country = models[0].attributes.country;
		console.log(models);
		return country;
	});

	app.categoryScroll = Backbone.View.extend({

		tagname: 'ul',

		template: Handlebars.compile(
				'<ul style="padding-left:0;" class="scroll" id="related">'+
				'<div class="row"><div class="col-md-12" style="color:#04C8A7;"><h3>More from {{#cat models}} {{attributes.country}}{{/cat}}</h3></div></div>'+
				'{{#each models}}'+
					'<li>'+
						'<a href="#/posts/{{attributes._id}}"><h4>{{attributes.postTitle}}</h4></a>'+
						'<a href="#/posts/{{attributes._id}}"><img src="{{attributes.image}}" class="img-responsive center-block" /></a>'+
					'</li>'+
				'{{/each}}'+
				'</ul>'
		),

		initialize: function  (options) {
			this.collection = options.collection;
			this.category = options.category;
			console.log('category collection has ' + this.category);
			console.log(this.collection);
			this.listenTo(this.collection, "reset", this.render, this);
		},

		render: function () {
			console.log(this.$el);
			this.$el.html(this.template(this.collection));
			return this;
		}

	});

})(jQuery);