import Ember from 'ember';

export default Ember.Component.extend({
  looper: null,
  didInsertElement() {
    const url = this.get('device.url');
    if (!Ember.isEmpty(url)) {
      console.log('setting up loop.');
      this.loop(url, 10000);
    } else {
      console.log('Missing URL, not redirecting.', url);
      this.set('message', 'Invalid URL');
    }
    this._super(...arguments);
  },
  loop(url, wait) {
    this.looper = Ember.run.later(this, function() {
      this.redirect(url);
    }, wait);
  },
  redirect(url) {
    if (!Ember.isEmpty(url)) {
      console.log('done with redirect!', url);
      // window.location.href = url;
    } else {
      console.log('there was a problem!', url);
      this.set('message', 'Invalid URL');
    }
  }
});
