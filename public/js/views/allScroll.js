var app = app || {};

(function ($) {
        'use strict';

	app.allScroll = Backbone.View.extend({

		tagname: 'ul',

		template: Handlebars.compile(
				'<ul style="padding-left:0;" class="scroll">'+
				'{{#each models}}'+
					'<li>'+
						'<a href="#/posts/{{attributes._id}}"><h4>{{attributes.postTitle}}</h4></a>'+					'</div>' +
						'<img src="{{attributes.image}}" class="img-responsive center-block">'+
					'</li>'+
				'{{/each}}'+
				'</ul>'
		),

		initialize: function  (options) {
			this.collection = options.collection;
			console.log('inside allScroll');
			this.collection.bind("change", this.render, this);
			this.collection.bind("reset", this.render);

			app.AppView.vent.on('sort', this.sortByCat, this);
		},

		sortByCat: function(category){
			//use jQuery fn to sort by category and highlight the matching cat's
			//and add title to top that says More posts from 'category'
		},

		render: function () {
			console.log(this.$el);
			this.$el.html(this.template(this.collection));
			return this;
		}

	});

})(jQuery);