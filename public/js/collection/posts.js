var app = app || {};

(function () {

	app.Posts = Backbone.Collection.extend({
		model: app.postModel,

		initialize: function(options){
			console.log('app.Words initialized');
		}
		
	});

})();