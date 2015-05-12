App.Article = DS.Model.extend({
  type: DS.attr('string'),
  acontent: DS.attr('string')
});

App.Type = DS.Model.extend({
	name: DS.attr('string')
});