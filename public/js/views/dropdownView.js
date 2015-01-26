var app = app || {};

(function ($) {
        'use strict';

	app.dropdownView = Backbone.View.extend({

		template: Handlebars.compile(
		'<div class="row">' +
			'<div class="col-md-1"><h4>Home</h4></div>'+
			'<div class="col-md-1"><h4>About</h4></div>' +
			'<div class="col-md-1 dropdown">'+
  				'<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">Places<span class="caret"></span>'+
 				 '</button>' +
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
			console.log('inside dropdownView');
			this.collection.bind("change", this.render, this);
			this.collection.bind("reset", this.render);
		},

		events: {
			'click #place': 'showplace'
		},

		showplace: function (e){
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