var app = app || {};

(function ($) {
 //       'use strict';

	app.AppView = Backbone.View.extend({
//------Initialize AppView by fetching the players collection and listening for events
//------from the router and the players collection upon login 
		initialize: function  () {
			var that = this;
			console.log('AppView is initialized.');
			this.pc = new app.Posts();
			this.pc.fetch({reset:true,
				success: function(){ 
					that.showRecent();				}
			});

			app.AppView.vent.on('recent', this.showRecent, this);
			app.AppView.vent.on('loadPost', this.loadPost, this);

			this.post = this.$('#post');
			this.sideScroll = this.$('#sideScroll');
		},

		events:{
			'click #big': 'showRecent'
		},

		showRecent: function(){
			console.log('calling recent');
			var recent = this.pc.at(0).id;
			console.log(recent);
			this.loadPost(recent);
		},

		loadPost: function(post){
			console.log(post);
			var pm = new app.postModel();
			var model = this.pc.findWhere({_id: post});
			var pv = new app.postView({model: model});
			this.post.html(pv.render().el);
			this.scrollBar();
		},

		scrollBar: function(){
			console.log('calling scroll');
			var sb = new app.scrollBar({collection: this.pc});
			this.sideScroll.html(sb.render().el);
		} 

	});
//----vent used as the Applications event aggregator.
	app.AppView.vent = _.extend({}, Backbone.Events);

})(jQuery);