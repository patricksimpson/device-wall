import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('wall', { path: '/' }, function() {
    this.route('new');
    this.route('device', { path: '/:wall_id/devices' }, function() {
      this.route('new');
    });
  });
});

export default Router;
