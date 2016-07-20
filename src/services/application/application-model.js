'use strict';

// application-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  name: { type: String, required: true },
  objectiveSecret:String,
  objectiveKey:String,
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const applicationModel = mongoose.model('application', applicationSchema);

module.exports = applicationModel;
