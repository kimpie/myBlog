var app = app || {};

(function ($) {
        'use strict';

	app.allScroll = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row scroll">'+
				'<ul>'+
				'{{#each models}}'+
					'<li>'+
						'<a href="#/posts/{{attributes._id}}"><h4>{{attributes.postTitle}}</h4></a>'+					'</div>' +
						'<img src="{{attributes.image}}">'+
						'<hr class="style-one">'+
					'</li>'+
				'{{/each}}'+
				'</ul>'+
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