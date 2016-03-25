import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addWall: function() {
      var newWall = this.store.createRecord('wall', {
        name: this.get('name'),
        masterUrl: this.get('masterUrl')
      });
      newWall.save();
      this.set('name', '');
      this.set('masterUrl', '');
      this.transitionToRoute('wall');
    }
  }
});
