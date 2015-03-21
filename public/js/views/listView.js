var app = app || {};

(function ($) {
        'use strict';

		Handlebars.registerHelper('firstP', function(words) {
  			return words[0].p;
		});

	app.listView = Backbone.View.extend({


		template: Handlebars.compile(
			'<ul class="scroll">'+
			'{{#if models}}'+
				'{{#each models}}'+
					'<li class="postList">'+
						'<div class="row">'+
							'<div class="col-md-10 col-md-offset-1" id="postSnip">'+
								'<div class="col-md-7">' +
									'<div class="row">'+
										'<div class="col-md-12">'+
										'<a href="#/posts/{{attributes._id}}"><h4>{{attributes.postTitle}}</h4></a>' +
										'</div>' +
										'<div class="col-md-12">'+
											'{{firstP attributes.pbody}}'+
										'</div>'+
									'</div>'+
								'</div>' +
							
								'<div class="col-md-5">'+
								'<img src="{{attributes.image}}" class="img-responsive center-block">'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</li>'+
				'{{/each}}'+
			'{{else}}'+
				'<div class="row"><div class="col-md-12"><h2>Sorry, I\'m behind on posts... coming soon.</h2></div></div>'+
			'{{/if}}'+
			'</ul>'
		),

		initialize: function  (options) {
			this.collection = options.collection;
			console.log('list view initialized with ' + this.collection.length);
			console.log(this.collection);
		},

		render: function () {
			console.log('render happening');
			this.$el.html(this.template(this.collection));
			return this;
		}

	});

})(jQuery);