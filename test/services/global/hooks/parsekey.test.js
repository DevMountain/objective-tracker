'use strict';

const assert = require('assert');
const parsekey = require('../../../../src/services/global/hooks/parsekey.js');

describe('global parsekey hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    parsekey()(mockHook);

    assert.ok(mockHook.parsekey);
  });
});
