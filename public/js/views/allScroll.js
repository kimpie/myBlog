var app = app || {};

(function ($) {
        'use strict';

	app.allScroll = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row scroll">'+
				'{{#each models}}'+
					'<div class="col-md-12" id="scrollTitle">'+
						'<a href="#/posts/{{attributes._id}}"><h4>{{attributes.title}}</h4></a>'+
					'</div>' +
					'<div class="col-md-12"><img src="{{attributes.image}}"></div>'+
					'<div class="col-md-12"><hr class="style-one"></div>'+
				'{{/each}}'+
			'</div>'
		),

		initialize: function  (options) {
			this.collection = options.collection;
			console.log('post collection initialized with category ' + options.category);
			console.log(this.collection);
			this.collection.bind("change", this.render, this);
			this.collection.bind("reset", this.render);

			app.AppView.vent.on('sort', this.sortByCat, this);
		},

		sortByCat: function(category){
			//use jQuery fn to sort by category and highlight the matching cat's
			//and add title to top that says More posts from 'category'
		},

		render: function () {
			console.log('render happening');
			this.$el.html(this.template(this.collection));
			return this;
		}

	});

})(jQuery);