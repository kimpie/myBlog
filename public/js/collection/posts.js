var app = app || {};

(function () {

	app.Posts = Backbone.Collection.extend({
		model: app.postModel,
		url: '/posts',
		initialize: function(options){
			console.log('app.Posts initialized');
		},
		comparator: 'postDate',

		customFilter: function(filters){
			var results = this.where(filters);
			return new app.Posts(results);
		},

		newPost: function(info){
			console.log(info);
			this.create({
				postTitle: info.postTitle,
				category: info.category,
				country: info.country,
				year: info.year,
				month: info.month,
				postDate: info.postDate,
				pbody: info.pbody,
				image: info.image
			},{
				success:function(){
					console.log('successfully created post');
				}
			});
		}
		
	});

})();