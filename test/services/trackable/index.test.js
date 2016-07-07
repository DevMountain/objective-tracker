'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('trackable service', function() {
  it('registered the trackables service', () => {
    assert.ok(app.service('trackables'));
  });
});
