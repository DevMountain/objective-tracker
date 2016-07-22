'use strict';

const globalHooks = require('../../../hooks');
const appHooks = require('../../../hooks/appHooks');

const hooks = require('feathers-hooks');

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [appHooks.getApp(), appHooks.decodeToken(), appHooks.getTrackable(), appHooks.getUser(), appHooks.getWitness()],
  update: [globalHooks.close()],
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
