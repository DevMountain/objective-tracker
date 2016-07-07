'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('record service', function() {
  it('registered the records service', () => {
    assert.ok(app.service('records'));
  });
});
