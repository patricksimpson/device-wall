import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  slug: DS.attr('string'),
  updated: DS.attr('number')
});

