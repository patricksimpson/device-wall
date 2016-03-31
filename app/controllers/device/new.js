import Ember from 'ember';

export default Ember.Controller.extend({
  wall: Ember.computed(function() { return this.get('model'); }),
  slugify(str) {
  return str.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[\s\W-]+/g, '-')      // Replace spaces, non-word characters and dashes with a single dash (-)
    .replace(/-$/, '');             // Remove last floating dash if exists
  },
  actions: {
    addDevice: function() {
      var newDevice = this.store.createRecord('device', {
        name: this.get('name'),
        url: this.get('url'),
        slug: this.slugify(this.get('name'))
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
