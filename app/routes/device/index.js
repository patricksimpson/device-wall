import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('device', { orderBy: 'slug', equalTo: params.device_slug }).then(function(data){
      return data.get('firstObject');
    });
  }
});
