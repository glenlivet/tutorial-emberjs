App.AppController = Ember.ArrayController.extend({
	
});

App.AppIndexController = Ember.ObjectController.extend({
	actions: {
		search: function(){
			var searchWord = this.get('searchWord');
			console.log('searching: ' + searchWord);
		}
	},
	searchWord: ''
});