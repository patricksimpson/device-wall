import Ember from 'ember';

export default Ember.Component.extend({
  looper: null,
  didRender() {
    const url = this.get('device.url');
    let wait = 0;
    if (!Ember.isEmpty(url)) {
      if (!Ember.isEmpty(window.document.referrer)) {
        wait = 3000;
      }
      if (document.location.hostname !== 'localhost') {
        this.loop(url, wait);
      } else {
        this.manual();
      }
    }
  },
  manual() {
    this.set('message', 'Redirect disabled');
  },
  loop(url, wait) {
    this.looper = Ember.run.later(this, function() {
      this.redirect(url);
    }, wait);
  },
  redirect(url) {
    if (!Ember.isEmpty(url)) {
      window.location.href = url;
    } else {
      this.set('message', 'Invalid URL');
    }
  }
});
