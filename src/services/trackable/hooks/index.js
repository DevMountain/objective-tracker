'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const appHooks = require('../../../hooks/appHooks');
const _ = require('lodash');

exports.before = {
  all: [],
  find: [appHooks.verifyQueryToken(true)],
  get: [appHooks.verifyQueryToken(true)],
  create: [appHooks.getApp(), appHooks.decodeToken(), appHooks.checkDuplicateTrackable(), appHooks.preventDuplicate()],
  update: [appHooks.getApp(), appHooks.decodeToken(), appHooks.checkDuplicateTrackable()],
  patch: [appHooks.getApp(), appHooks.decodeToken(), appHooks.checkDuplicateTrackable()],
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
