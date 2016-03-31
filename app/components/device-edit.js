import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(e) {
      console.log('uh... edit?');
      console.log(e);
      this.sendAction('editDevice', e);
    }
  }
});
