import Ember from 'ember';

export default Ember.Controller.extend({
  didInsertElement() {
    console.log('loaded?');
  }
});
