import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  masterUrl: DS.attr('string'),
  devices: DS.hasMany('device', { async: true }),
  chenge: ''
});
