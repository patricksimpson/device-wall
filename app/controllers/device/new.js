import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addDevice: function() {
      var newDevice = this.store.createRecord('device', {
        name: this.get('name'),
        url: this.get('url')
      });
      newDevice.save();
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
