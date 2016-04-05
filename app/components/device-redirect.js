import Ember from 'ember';

export default Ember.Component.extend({
  looper: null,
  wait: 0,
  isLocal: window.document.location.hostname === 'localhost',
  referrer: window.document.referrer,
  redirectInit: function() {
    if (!Ember.isEmpty(this.get('device.url'))) {
      if (!Ember.isEmpty(this.get('referrer'))) {
        this.set('wait', 3000);
      }
      if (!this.get('isLocal')) {
        this.loop();
      } else {
        this.set('wait', 5000);
        this.loop();
        // this.manual();
      }
    }
  },
  didRender() {
    Ember.run.later(this, function() {
      this.set('url', this.get('device.url'));
    });
  },
  url: null,
  urlObserver: Ember.observer('url', function(){
    this.redirectInit();
  }),
  willDestroyElement() {
    Ember.run.cancel(this.get('looper'));
  },
  manual() {
    this.set('message', 'Redirect disabled');
  },
  loop() {
    this.looper = Ember.run.later(this, this.get('redirect'), this.get('wait'));
  },
  redirect() {
    if (!Ember.isEmpty(this.get('device.url'))) {
      window.location.href = this.get('device.url');
    } else {
      this.set('message', 'Invalid URL');
    }
  }
});
