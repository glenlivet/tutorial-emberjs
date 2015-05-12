

App.Word = DS.Model.extend({
  spell: DS.attr('string'),
  explanation: DS.attr('string'),
  examples: DS.hasMany('example')
});

App.Example = DS.Model.extend({
  sentence: DS.attr('string'),
  word: DS.belongsTo('word')
});