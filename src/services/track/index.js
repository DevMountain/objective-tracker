'use strict';

const service = require('feathers-mongoose');
const track = require('./track-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: track,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/tracks', service(options));

  // Get our initialize service to that we can bind hooks
  const trackService = app.service('/tracks');

  // Set up our before hooks
  trackService.before(hooks.before);

  // Set up our after hooks
  trackService.after(hooks.after);
};
