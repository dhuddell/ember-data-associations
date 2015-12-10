import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  badges: DS.attr(),
  generation: DS.belongsTo('generation', {async: true})
});
