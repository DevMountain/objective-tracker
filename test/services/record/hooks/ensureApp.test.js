'use strict';

const assert = require('assert');
const ensureApp = require('../../../../src/services/record/hooks/ensureApp.js');

describe('record ensureApp hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    ensureApp()(mockHook);

    assert.ok(mockHook.ensureApp);
  });
});
