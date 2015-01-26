var app = app || {};

(function ($) {
        'use strict';

	app.categoryScroll = Backbone.View.extend({

		tagname: 'ul',

		template: Handlebars.compile(
				'<ul style="padding-left:0;" class="scroll" id="related">'+
				'{{#each models}}'+
					'<li>'+
						'<a href="#/posts/{{attributes._id}}"><h4>{{attributes.postTitle}}</h4></a>'+
						'<img src="{{attributes.image}}" class="img-responsive center-block">'+
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