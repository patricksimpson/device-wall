import Ember from 'ember';

export default Ember.Controller.extend({
  wall: Ember.computed(function() { return this.get('model'); }),
  actions: {
    addDevice: function() {
      var newDevice = this.store.createRecord('device', {
        name: this.get('name'),
        url: this.get('url')
      });
      var wall = this.get('wall');
      wall.get('devices').addObject(newDevice);

      newDevice.save().then(function() {
        return wall.save();
      });

      this.set('name', '');
      this.set('url', '');
      this.transitionToRoute('wall');
    },
    cancel: function() {
      this.set('name', '');
      this.set('url', '');
      this.transitionToRoute('wall');
    }
  }
});
