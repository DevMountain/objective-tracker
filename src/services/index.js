'use strict';
const module = require('./module');
const application = require('./application');
const user = require('./user');
const record = require('./record');
const user = require('./user');
const trackable = require('./trackable');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(trackable);
  app.configure(user);
  app.configure(record);
  app.configure(user);
  app.configure(application);
  app.configure(module);
};
