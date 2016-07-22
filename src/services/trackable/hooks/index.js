'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const appHooks = require('../../../hooks/appHooks');

exports.before = {
  all: [appHooks.getApp(), appHooks.decodeToken()],
  find: [appHooks.getApp(), appHooks.decodeToken()],
  get: [appHooks.getApp(), appHooks.decodeToken()],
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
