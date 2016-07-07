'use strict';

const service = require('feathers-mongoose');
const module = require('./module-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: module,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/modules', service(options));

  // Get our initialize service to that we can bind hooks
  const moduleService = app.service('/modules');

  // Set up our before hooks
  moduleService.before(hooks.before);

  // Set up our after hooks
  moduleService.after(hooks.after);
};
