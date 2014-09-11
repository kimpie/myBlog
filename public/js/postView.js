var app = app || {};

(function ($) {
        'use strict';

	app.postView = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row">'+
			'<div id="card1">' +
				'<ul id="cardList">'+
					'<li class="col-xs-4 col-md-3 col-md-offset-1 cards" title="The 80\'s" style="background-image: url(https://i.imgur.com/MipnJcT.png); background-position: center center; background-repeat:no-repeat; background-size: contain;"></li>' +
					'<li class="col-xs-4 col-md-3 cards" title="The 90\'s" style="background-image: url(https://i.imgur.com/Lg1khA7.png); background-position: center center; background-repeat:no-repeat;background-size: contain;"></li>' +
					'<li class="col-xs-4 col-md-3 cards" title="2000\'s" style="background-image: url(https://i.imgur.com/TPuIH9I.png); background-position: center center; background-repeat:no-repeat;background-size: contain;"></li>' +
				'</ul>' +
				'<ul id="cardList">' +
					'<li class="col-xs-4 col-md-3 col-md-offset-1 cards" title="Animals" style="background-image: url(https://i.imgur.com/Cu59osr.png); background-position: center center; background-repeat:no-repeat;background-size: contain;"></li>' +
					'<li class="col-xs-4 col-md-3 cards" title="Love" style="background-image: url(https://i.imgur.com/gd3uqX6.png); background-position: center center; background-repeat:no-repeat;background-size: contain;"></li>' +
					'<li class="col-xs-4 col-md-3 cards" title="Anything" style="background-image: url(https://i.imgur.com/XlnVSeD.png); background-position: center center; background-repeat:no-repeat;background-size: contain;"></li>' +
				'</ul>' +
			'</div>' +
			'</div>'
		),

		initialize: function  (options) {
			this.model = options.model;
			console.log('board view initialized with ');
			console.log(this.model);
			this.model.bind("change", this.render, this);
			this.model.bind("reset", this.render);
		},

		events: {
			'click .cards': 'showCard'
		},

		showCard: function(info){
			var category = info.currentTarget.title;
			console.log(category);
			app.AppView.vent.trigger('getCard', category);
		},

		render: function () {
			console.log('render happening');
			this.$el.html(this.template(this.model.attributes));
			return this;
		}

	});

})(jQuery);