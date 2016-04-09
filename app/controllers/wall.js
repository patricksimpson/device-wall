import Ember from 'ember';

export default Ember.Controller.extend({
  isRedirecting: true,
  actions: {
    toggleRedirect() {
      let isRedirecting = !this.get('isRedirecting');
      this.set('isRedirecting', isRedirecting);
      // Dirty hack.
      window.document.deviceWallIsRedirecting = isRedirecting;
    }
  }
});
