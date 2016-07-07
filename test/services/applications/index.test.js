'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('applications service', function() {
  it('registered the applications service', () => {
    assert.ok(app.service('applications'));
  });
});
