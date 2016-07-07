'use strict';

// module-model.js - A mongoose model
//
// A module is a collection of trackable objects.
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  description: { type: String, required: true },
  name: {type:String, required:true},
  _trackables:[{ type: mongoose.Schema.Types.ObjectId, ref:"trackable", required: true }],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const moduleModel = mongoose.model('module', moduleSchema);

module.exports = moduleModel;
