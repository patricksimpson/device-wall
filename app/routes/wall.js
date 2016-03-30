import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  data: null,
  beforeModel: function() {
    this.get('session').open('firebase', { provider: 'custom', token: config.firebaseToken}).then(function(data) {
      this.set('data', data);
    });
  },
  model: function() {
    return this.store.findAll('wall');
  }
});
