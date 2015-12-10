import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  games: DS.attr(),
  pokemon: DS.hasMany('pokemon', {async: true}),
  region: DS.belongsTo('region', {async: true})
});
