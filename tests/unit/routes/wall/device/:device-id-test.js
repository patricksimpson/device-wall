import { moduleFor, test } from 'ember-qunit';

moduleFor('route:wall/device/:device-id', 'Unit | Route | wall/device/:device id', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
