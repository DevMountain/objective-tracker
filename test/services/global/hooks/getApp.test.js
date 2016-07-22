'use strict';

const assert = require('assert');
const getApp = require('../../../../src/services/global/hooks/getApp.js');

describe('global getApp hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    getApp()(mockHook);

    assert.ok(mockHook.getApp);
  });
});
