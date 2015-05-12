App.Router.map(function() {
  this.resource('app', { path: '/' }, function(){
  	this.route('article', {path: 'articles/:article_type/:article_id'});

  });
});

App.AppRoute = Ember.Route.extend({
	model: function(params){
		var rtn = [{name:'about'},{name:'java'},{name:'Android'},{name:'javascript'}];
		return rtn;
	}
});

App.AppIndexRoute = Ember.Route.extend({

});

App.AppArticleRoute = Ember.Route.extend({
	model: function(params){
		var rtn = this.store.createRecord('article', {
			type: params.article_type,
			acontent: new Ember.Handlebars.SafeString("<h3>a content</h3>")
		});
		return rtn;
	},
	serialize: function(model){
		return {article_type: model.get('type'), article_id: model.get('id')};
	}
});

// App.AppArticleIndexRoute = Ember.Route.extend({

// });

