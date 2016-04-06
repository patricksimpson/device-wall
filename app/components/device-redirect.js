import Ember from 'ember';

export default Ember.Component.extend({
  looper: null,
  wait: 0,
  isLocal: window.document.location.hostname === 'localhost',
  referrer: window.document.referrer,
  redirectInit: function() {
    let redirect = this.get('redirectWait');
    if (!Ember.isEmpty(this.get('device.url'))) {
      if (!Ember.isEmpty(this.get('referrer'))) {
        this.set('wait', 3000);
        // If the redirect is not set, fall back
        // on the default functionality.
        if (Ember.isEmpty(redirect)) {
          redirect = true;
        } else {
          if (!redirect) {
            this.set('wait', redirect);
          }
        }
      }
      if (!this.get('isLocal') || redirect) {
        console.log(redirect);
        console.log(this.get('isLocal'));
        // this.loop();
      } else {
        this.manual();
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
    this.set('message', 'Redirecting in ' + this.get('wait'));
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
