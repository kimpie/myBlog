var app = app || {};

(function ($) {
        'use strict';

	app.dropdownView = Backbone.View.extend({

		template: Handlebars.compile(
		'<div class="row">' +
			'<div class="col-md-1 goHome" style="cursor: pointer;"><h4>home</h4></div>'+
			'<div class="col-md-1" id="about"><h4>about</h4></div>' +
			'<div class="col-md-1 dropdown">'+
  				'<div class="dropdown-toggle" style="font-family: \'Oxygen\', sans-serif; cursor: pointer" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true"><h4>Places</h4><span class="caret"></span>'+
 				 '</div>' +
  				'<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">' +
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">Australia</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">Cambodia</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">Hong Kong</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">Indonesia</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">New Zealand</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">Singapore</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">Thailand</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">India</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">Japan</a></li>'+
   					 '<li role="presentation"><a role="menuitem" tabindex="-1" href="#" id="place">Malaysia</a></li>'+
  				'</ul>'+
			'</div>'+
		'</div>'
		),

		initialize: function  (options) {
			this.collection = options.collection;
			this.collection.bind("change", this.render, this);
			this.collection.bind("reset", this.render);
		},

		events: {
			'click #about': 'showAbout',
			'click #place': 'showplace'
		},

		showAbout: function(){
			console.log('about clicked');
		},

		showplace: function (e){
			e.preventDefault();
			console.log(e.currentTarget.text);
			var place = e.currentTarget.text;
			app.AppView.vent.trigger('placeList', place);
		},

		render: function () {
			console.log(this.$el);
			this.$el.html(this.template(this.collection));
			return this;
		}

	});

})(jQuery);