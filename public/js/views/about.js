var app = app || {};

(function ($) {
        'use strict';

	app.aboutView = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="row">'+
				'<div class="col-md-12" style="text-align:center">'+
					'<h1>Thank you for reading.</h1><br>'+
					'<h4>I live and work in Sydney.  Two and a half years ago my boyfriend, Chris and I moved from Austin, TX to Sydney, Australia with a work opportunity.</h4>'+
					'<h4></h4>'+
					'<h4>Please enjoy the notes from our journey and get inspired to take your own!</h4>'+
					'<br>'+
				'</div>'+
			'</div>'+
			'<div class="row aboutImage">'+
				'<div class="col-md-3 col-md-offset-1">'+
					'<img src="https://lh3.googleusercontent.com/-s1OYY-0-J-Q/UfTapDiHXkI/AAAAAAAANtc/ys2jyWf9Hs8/w864-h648-no/Dscn4829.jpg"></img>' +
				'</div>'+
				'<div class="col-md-3">'+
					'<img src="https://lh3.googleusercontent.com/-8lBvmVH4bRk/UvGYXFG6zDI/AAAAAAAAWtw/MLtYTfxyig0/w864-h648-no/DSCN8745.JPG"></img>'+
				'</div>'+
				'<div class="col-md-3">'+
					'<img src="https://lh3.googleusercontent.com/-7JxoOCrZ8Do/VC5sMSUITpI/AAAAAAAAZhI/LBWBdtHQmZk/w864-h648-no/DSCN1580.JPG"></img>'+
				'</div>'+
			'</div>'
		),

		initialize: function  (options) {
			console.log('about view initialized with ');
		},

		render: function () {
			this.$el.html(this.template);
			return this;
		}

	});

})(jQuery);