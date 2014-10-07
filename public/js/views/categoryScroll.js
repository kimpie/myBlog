var app = app || {};

(function ($) {
        'use strict';

	app.categoryScroll = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row scroll" id="scrollPost">'+
				'<div class="col-md-12"><h4>Related Posts</h4></div>'+
				'{{#each models}}'+
					'<div class="col-md-12" id="scrollTitle">'+
						'<a href="#/posts/{{attributes._id}}"><h4>{{attributes.postTitle}}</h4></a>'+
					'</div>' +
					'<div class="col-md-12"><img src="{{attributes.image}}"></div>'+
					'<div class="col-md-12"><hr class="style-one"></div>'+
				'{{/each}}'+
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