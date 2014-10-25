var Colorapp = Colorapp || { Models: {}, Collections: {}, Views: {} };

Colorapp.Views.AppListView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render);
	},
	render: function(){
		var self = this;
		this.$el.empty();
		_.each(this.collection.models, function(app){
			var appView = new Colorapp.Views.AppView({model: AppModel})
			self.$el.append( appView.render().el );
		});
	}
})
