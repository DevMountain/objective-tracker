'use strict';

const service = require('feathers-mongoose');
const record = require('./record-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: record,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/records', service(options));

  // Get our initialize service to that we can bind hooks
  const recordService = app.service('/records');

  // Set up our before hooks
  recordService.before(hooks.before);

  // Set up our after hooks
  recordService.after(hooks.after);
};
