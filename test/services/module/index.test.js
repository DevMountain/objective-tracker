'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('module service', function() {
  it('registered the modules service', () => {
    assert.ok(app.service('modules'));
  });
});
