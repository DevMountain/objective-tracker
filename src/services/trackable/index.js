'use strict';

const service = require('feathers-mongoose');
const trackable = require('./trackable-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: trackable,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/trackables', service(options));

  // Get our initialize service to that we can bind hooks
  const trackableService = app.service('/trackables');

  // Set up our before hooks
  trackableService.before(hooks.before);

  // Set up our after hooks
  trackableService.after(hooks.after);
};
