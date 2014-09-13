var app = app || {};

(function () {

	app.Posts = Backbone.Collection.extend({
		model: app.postModel,
		url: '/posts',
		initialize: function(options){
			console.log('app.Posts initialized');
		}
		
	});

})();