import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('device', function() {
    this.route('new');
  });
  this.route('wall', { path: '/' }, function() {
    this.route('new');
  });
});

export default Router;
