import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  looper: null,
  wait: 0,
  isLocal: window.document.location.hostname === 'localhost',
  isRedirectingOverride: Ember.computed(function() { return window.document.deviceWallIsRedirecting; }),
  referrer: window.document.referrer,
  redirectInit: function() {
    let redirect = this.get('redirectWait'),
        redirectOverride = this.get('isRedirectingOverride');
    if (!_.isEmpty(this.get('device.url'))) {
      if (!_.isEmpty(this.get('referrer'))) {
        this.setWait(redirect, 3000);
      }
      if (!this.get('isLocal') || (redirect && redirect !== "false")) {
        let tempWait = parseInt(redirect, 10);
        if (_.isNumber(tempWait) && !_.isNaN(tempWait)) {
          this.set('wait', tempWait);
        }
        if (typeof redirectOverride === 'undefined' || (redirectOverride)) {
          this.loop();
          return true;
        }
      }
    }
    this.manual();
  },
  setWait(redirect, w) {
    let waitTime = 0,
        tempWait = parseInt(redirect, 10);
    if (_.isEmpty(redirect) || !_.isNumber(tempWait) || redirect === true) {
      waitTime = w;
    } else {
      if (_.isNumber(tempWait) && !_.isNaN(tempWait)) {
        waitTime = tempWait;
      }
    }
    this.set('wait', waitTime);
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
