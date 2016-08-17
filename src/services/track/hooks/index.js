'use strict';

const globalHooks = require('../../../hooks');
const appHooks = require('../../../hooks/appHooks');
const hooks = require('feathers-hooks');


exports.before = {
  all: [],
  find: [appHooks.verifyQueryToken(true)],
  get: [appHooks.verifyQueryToken(true)],
  create: [appHooks.getApp(), appHooks.decodeToken()],
  update: [appHooks.getApp(), appHooks.decodeToken()],
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
