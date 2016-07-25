'use strict';

// trackable-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackableSchema = new Schema({
  name: { type: String, required: true},
  category:{type:String, required: true},
  group:String,
  description:String,
  quantifierType:{type:String, enum:['Boolean', 'Rating']},
  requireSignature:{type:Boolean, default:false},
  _application:{ type: mongoose.Schema.Types.ObjectId,
     ref:"application" },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const trackableModel = mongoose.model('trackable', trackableSchema);

module.exports = trackableModel;
