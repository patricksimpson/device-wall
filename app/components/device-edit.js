import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      this.sendAction('edit');
    },
    cancel() {
      this.sendAction('cancel');
    }
  }
});
