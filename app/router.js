import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('wall', function() {
    this.route('new');
  });
  this.route('device', { path: '/:wall_id/devices' }, function() {
    this.route('new');
    this.route('index', { path: ':device_id' });
  });
  this.route('about');
});

export default Router;
