var app = app || {};

(function ($) {
 //       'use strict';

	app.AppView = Backbone.View.extend({
//------Initialize AppView by fetching the players collection and listening for events
//------from the router and the players collection upon login 
		initialize: function  () {
			console.log('AppView is initialized.');
			this.pc = new app.Posts();
			this.pc.fetch({reset:true});
			this.showRecent();

			this.post = this.$('#post');
		},

		showRecent: function(){
			var pm = new app.postModel();
			this.pc.findWhere({})
			var pv = new app.postView({model: recent});
			this.post.html(pv.render().el);
		} 


	});
//----vent used as the Applications event aggregator.
	app.AppView.vent = _.extend({}, Backbone.Events);

})(jQuery);