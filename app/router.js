import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('wall', function() {
    this.route('new');
    this.route('edit', { path: '/:wall_id/edit' });
  });
  this.route('device', { path: '/devices' }, function() {
    this.route('new', { path: '/:wall_id/new' });
    this.route('index', { path: ':device_id' });
  });
  this.route('about');
});

export default Router;
