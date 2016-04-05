import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['wid'],
  wid: null,
  slugify(str) {
    return str.toString().toLowerCase().trim()
      .replace(/&/g, '-and-')         // Replace & with 'and'
      .replace(/[\s\W-]+/g, '-')      // Replace spaces, non-word characters and dashes with a single dash (-)
      .replace(/-$/, '');             // Remove last floating dash if exists
  },
  actions: {
    editDevice() {
      var device = this.get('model'),
          slugify = this.slugify;
      this.store.findRecord('device', device.get('id')).then(function(data) {
        data.set('name', device.get('name'));
        data.set('url', device.get('url'));
        data.set('slug', slugify(device.get('name')));
        data.set('updated', Date.now());
        data.save();
      });
      this.transitionToRoute('wall');
    },
    deleteDevice() {
      var device = this.get('model'),
          _this = this;

      this.store.findRecord('wall', this.get('wid')).then(function(data) {
        data.get('devices').removeObject(device);
        data.save();
        device.destroyRecord();
        _this.transitionToRoute('wall');
      });

    },
    cancel() {
      this.transitionToRoute('wall');
    }
  }
});
