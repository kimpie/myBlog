var app = app || {};

(function ($) {
        'use strict';

	app.createPost = Backbone.View.extend({

		template: Handlebars.compile(
			'<div class="col-md-10 col-md-offset-1">'+
				'<form role="form">' +
				  '<div class="form-group">' +
				    '<label for="postTitle">Title</label>' +
				    '<input type="postTitle" class="form-control" id="postTitle" placeholder="Enter title">' +
				  '</div>' +
				  '<div class="form-group">' +
				    '<label for="image">Post Image SRC</label>' +
				    '<input type="text" class="form-control" id="image" placeholder="Enter img src">' +
				  '</div>' +
				  '<div class="form-group">' +
				    '<label for="catgeory">Category</label>' +
				    '<input type="category" class="form-control" id="category" placeholder="Enter category">' +
				  '</div>' +
				  '<div class="form-group">' +
				    '<label for="postDate">Post Date</label>' +
				    '<input type="postDate" class="form-control" id="postDate" placeholder="Enter post date">' +
				  '</div>' +
				  '<div class="form-group">' +
				    '<label for="year">Year</label>' +
				    '<input type="year" class="form-control" id="year" placeholder="Enter year">' +
				  '</div>' +
				  '<div class="form-group">' +
				    '<label for="month">Month</label>' +
				    '<input type="month" class="form-control" id="month" placeholder="Enter month">' +
				  '</div>' +
				  '<div class="form-group">' +
				    '<label for="country">Country</label>' +
				    '<input type="country" class="form-control" id="country" placeholder="Enter country">' +
				  '</div>' +
				 '<div class="form-group">' +
				    '<label for="pbody">Body</label>' +
				    '<textarea class="form-control" rows="100" id="pbody" placeholder="Enter post"></textarea>' +
				  '</div>' +
				  '<button type="submit" class="btn btn-default" id="submit">Submit</button>' +
				'</form>' +
			'</div>'
		),

		initialize: function  (options) {
			this.collection = options.collection;
			console.log('create Post initialized with ');
			console.log(this.collection);
			this.collection.bind("change", this.render, this);
			this.collection.bind("reset", this.render);
		},

		events: {
			"click #submit" : "createPost"
		},

		createPost: function(e){
			e.preventDefault();
			var ti = jQuery('#postTitle').val();
			var im = jQuery('#image').val();
			var ca = jQuery('#category').val();
			var pd = jQuery('#postDate').val();
			var y = jQuery('#year').val();
			var m = jQuery('#month').val();
			var co = jQuery('#country').val();
			var k = jQuery('#pbody').val().split('\n');
			var arr =[];
			var m;
			function addBracket(element, index, array){
			    console.log(element.charAt(0));
			    if (element.charAt(0) == '?'){
			    	console.log('inside else if');
			    	var l = element.length; var k = element.slice(1, l);
			    	m = {"img": k};
			    	console.log(m);
			    	arr.push(m);
			    } else if(element.charAt(0) == 'h'){
			    	var l = element.length; var k = element.slice(1, l);
			    	m = {"h3": k};
			    	console.log(m);
			    	arr.push(m);
			    } else if(element != ''){
			    	console.log('inside first if');
					m = {"p": element};
					arr.push(m);
			    } 
			}

			k.forEach(addBracket);
			console.log(arr);
			var b = arr;
			var info = {
				postTitle: ti,
				category: ca,
				postDate: pd,
				year: y,
				month: m,
				country: co,
				pbody: b,
				image: im
			};
			app.AppView.vent.trigger('sendPost', info);
		},

		render: function () {
			console.log('createPost rendering');
			this.$el.html(this.template());
			return this;
		}

	});

})(jQuery);