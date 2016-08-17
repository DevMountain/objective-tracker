'use strict';
const application = require('./application');
const record = require('./record');
const track = require('./track');
const trackable = require('./trackable');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;
  app.use(function(req, res, next){
    console.log(req.method,"--" , req.url);
    next();
  })
  app.configure(application);
  app.configure(record);
  app.configure(track);
  app.configure(trackable);
  app.configure(user);
};
