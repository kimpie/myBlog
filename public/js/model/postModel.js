var app = app || {};

(function () {
        'use strict';


	app.postModel = Backbone.Model.extend({
		defaults: {
			country: '',
			year: '',
			month: '',
			body: [],
			title: '',
			category: ''
		},
		idAttribute: '_id',
		initialize: function(options){
			console.log('app.postModel initialized');
		}

	});

})();