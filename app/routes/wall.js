import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  beforeModel: function() {
    this.get('session').open('firebase', { provider: 'custom', token: config.firebaseToken}).then(function(data) {
      console.log(data);
    });
  },
  model: function() {
    return this.store.findAll('wall');
  }
});
