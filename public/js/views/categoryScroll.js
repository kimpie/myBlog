var app = app || {};

(function ($) {
        'use strict';

	app.categoryScroll = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row scroll" id="scrollPost">'+
				'<div class="col-md-12"><h4>Related Posts</h4></div>'+
				'<ul>'+
				'{{#each models}}'+
					'<li>'+
						'<a href="#/posts/{{attributes._id}}"><h4>{{attributes.postTitle}}</h4></a>'+
						'<img src="{{attributes.image}}">'+
						'<hr class="style-one">'+
					'</li>'+
				'{{/each}}'+
				'</ul>'+
			'</div>'
		),

		initialize: function  (options) {
			this.collection = options.collection;
			this.category = options.category;
			console.log('category collection has ' + this.category);
			console.log(this.collection);
			this.listenTo(this.collection, "reset", this.render, this);
		},

		render: function () {
			console.log('render happening');
			this.$el.html(this.template(this.collection));
			return this;
		}

	});

})(jQuery);