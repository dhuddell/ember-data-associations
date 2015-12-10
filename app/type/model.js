import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pokemon: DS.hasMany('pokemon', {async: true}),
  doubleDamageFrom: DS.hasMany('type',{async: true, inverse: null}),
  halfDamageFrom: DS.hasMany('type',{async: true, inverse: null}),
  noDamageFrom: DS.hasMany('type',{async: true, inverse: null})
});
