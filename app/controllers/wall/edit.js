import Ember from 'ember';

export default Ember.Controller.extend({
  wall: Ember.computed(function() { return this.get('model'); }),
  actions: {
    editWall() {
      console.log(this.get('wall.name'));
      console.log(this.get('wall.masterUrl'));
    }
  }
});
