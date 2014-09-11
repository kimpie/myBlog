var app = app || {};

(function () {
        'use strict';


	app.postModel = Backbone.Model.extend({
		urlRoot: '/posts',
		defaults: {
			country: '',
			year: '',
			month: '',
			body: [],
			title: '',
			category: ''
		}
	});

})();