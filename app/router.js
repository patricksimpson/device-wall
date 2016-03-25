import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('device');
  this.route('wall', { path: '/' }, function() {
    this.route('new');
  });
});

export default Router;
