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
			app.AppView.vent.on('newPost', this.createNew, this);
			app.AppView.vent.on('sendPost', this.sendPost, this);
			app.AppView.vent.on('about', this.loadAbout, this);
			app.AppView.vent.on('notice', this.showNotice, this);
			app.AppView.vent.on('hideN', this.hideNotice, this);
			app.AppView.vent.on('placeList', this.showList, this);

			this.post = this.$('#post');
			this.categoryScroll = this.$('#categoryScroll');
			this.allScroll = this.$('#allScroll');
			this.notice = this.$('#notice');
			this.ddbar = this.$('#ddbar');
			this.notice = this.$('#notice');
		},

		events:{
			'click .goHome': 'showRecent',
			'click #about': 'showAbout'
		},

		hideNotice: function(){
			this.notice.hide();
		},

		filtered: function(category){
			var filteredCollection = new Backbone.Collection();
			console.log(filteredCollection);
			var filter = {category: category};
			var results = this.pc.where(filter);
			filteredCollection.reset(results);
			return filteredCollection;
		},	

		showList: function(category){
			var fc = this.filtered(category);
			console.log(fc);
			var lv = new app.listView({collection: fc});
			this.post.html(lv.render().el);
		},

		showNotice: function(){
			this.notice.show();
			var n = new app.noticeView();
			this.notice.html(n.render().el);
		},

		showRecent: function(){
			console.log('calling recent');
			var recent = this.pc.at(0).id;
			console.log(recent);
			this.loadPost(recent);
			this.showNotice();
			this.loadDropdown();
		},

		showAbout: function(){
			var a = new app.aboutView();
			this.post.html(a.render().el);
		},

		loadDropdown: function(){
			var dd = new app.dropdownView({collection: this.pc});
			this.ddbar.html(dd.render().el);
		},

		loadPost: function(post){
			var pm = new app.postModel();
			var model = this.pc.findWhere({_id: post});
			var cat = model.attributes.category;
			var pv = new app.postView({model: model});
			this.post.html(pv.render().el);
			this.scrollBar(cat, post);
		},

		scrollBar: function(category, post){
			var fc = this.filtered(category);
			var cb = new app.categoryScroll({collection: fc});
			this.categoryScroll.html(cb.render().el);
			var sb = new app.allScroll({collection: this.pc});
			this.allScroll.html(sb.render().el);
		},

		createNew: function(){
			this.post.empty();
			console.log('#post should be empty')
			var cp = new app.createPost({collection: this.pc});
			this.post.html(cp.render().el);
		},

		sendPost: function(info){
			console.log('send post has');
			console.log(info);
			this.pc.newPost(info);
		},

		loadAbout: function(){
			var av = app.aboutView();
			this.post.html(pv.rener().el);
		} 

	});
//----vent used as the Applications event aggregator.
	app.AppView.vent = _.extend({}, Backbone.Events);

})(jQuery);