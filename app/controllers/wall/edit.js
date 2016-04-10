import Ember from 'ember';

export default Ember.Controller.extend({
  wall: Ember.computed(function() { return this.get('model'); }),
  actions: {
    editWall() {
      let url = this.get('wall.masterUrl'),
          _this = this;
      this.get('wall.devices').then(function(d) {
        d.currentState.forEach(function(device) {
          d.store.findRecord('device', device.id).then(function(data) {
            data.set('url', url);
            data.save();
          });
        });
        _this.transitionToRoute('wall');
      });
    },
    cancel() {
      this.transitionToRoute('wall');
    }
  }
});
