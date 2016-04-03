import Ember from 'ember';
import config from '../config/environment';
import FirebaseTokenGenerator from 'npm:firebase-token-generator';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session').get('uid') !== '1') {
      var tokenGenerator = new FirebaseTokenGenerator(config.firebaseSecret),
          token = tokenGenerator.createToken({ uid: '1', isAdmin: true });
      return this.get('session').open('firebase', { provider: 'custom', token: token});
    } else {
      return this.get('session');
    }
  },
  afterModel() {
    this.transitionTo('wall');
  }
});
