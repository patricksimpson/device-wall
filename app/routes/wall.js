import Ember from 'ember';
import config from '../config/environment';
import FirebaseTokenGenerator from 'npm:firebase-token-generator';

export default Ember.Route.extend({
  data: null,
  beforeModel: function() {
    if (this.get('session').get('uid') !== '1') {
      var tokenGenerator = new FirebaseTokenGenerator(config.firebaseSecret),
          token = tokenGenerator.createToken({ uid: '1', isAdmin: true });
      this.get('session').open('firebase', { provider: 'custom', token: token}).then(function(data) {
        this.set('data', data);
      });
    }
  },
  model: function() {
    return this.store.findAll('wall');
  }
});
