'use strict';

// track-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  description: { type: String},
  name: {type:String, required:true},
  _trackables:[{ type: mongoose.Schema.Types.ObjectId, ref:"trackable", required: true }],
  _application:{ type: mongoose.Schema.Types.ObjectId, ref:"application", required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const trackModel = mongoose.model('track', trackSchema);

module.exports = trackModel;
