'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const appHooks = require('../../../hooks/appHooks');

exports.before = {
  all: [],
  find: [appHooks.verifyQueryToken(true)],
  get: [appHooks.verifyQueryToken(true)],
  create: [],
  update: [],
  patch: [globalHooks.close()],
  remove: [globalHooks.close()]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
