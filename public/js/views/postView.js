var app = app || {};

(function ($) {
        'use strict';

	Handlebars.registerHelper('date', function(text) {
		text = text.substr(0,15);;

		return text;
	});


	app.postView = Backbone.View.extend({


		template: Handlebars.compile(
			'<div class="row" id="text">'+
				'<div id="test"></div>'+
				'<div class="row" id="pvtitle">'+
					'<div class="col-md-5 col-md-offset-1"><img src="{{image}}"></div>'+
					'<div class="col-md-6" style="align:left"><h1>{{postTitle}}</h1></div>' +
					'<div class="col-md-6" style="color:#04C8A7; cursor:pointer" id="country"><h4>{{country}}</h4></div>' +
					'<div class="col-md-6" style="color:gray"><h6>Posted {{#date postDate}}{{/date}}</h6></div>' +
				'</div>'+
				'<div class="col-md-12"><hr></div>'+
				'<div class="col-md-12" id="body">'+
					'{{#each pbody}}'+
						'<p class="lead">{{p}}</p>'+
						'<h3>{{h3}}</h3>'+
						'{{#if img}}<img src="{{img}}">{{/if}}'+
					'{{/each}}'+
				'</div>' +
				'<div class="row">'+
					'<div class="col-md-6"style="margin-top:30px"><h3>LIKE</h3></div>'+
					'<div class="col-md-1 col-md-offset-5" id="up" style="cursor:pointer"><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>'+
					'<div class="col-md-12" style="margin-bottom:40px"><hr></div>'+
				'</div>'+
			'</div>'
		),

		initialize: function  (options) {
			this.model = options.model;
			console.log('post view initialized with ');
			console.log(this.model);
			this.model.bind("change", this.render, this);
			this.model.bind("reset", this.render);
		},

		events:{
			'click #country': 'countryList',
			'click #up': 'gotoTop'
		},

		gotoTop: function(){
			$('#post').scrollTop(0);
			$(window).scrollTop(0);
		},

		countryList: function(e){
			var c = this.model.attributes.country;
			console.log(c);
			app.AppView.vent.trigger('placeList', c);
		},


		render: function () {
			console.log('render happening');
			this.$el.html(this.template(this.model.attributes));
			return this;
		}

	});

})(jQuery);