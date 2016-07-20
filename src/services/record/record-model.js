'use strict';

// record-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  _trackable: { type: mongoose.Schema.Types.ObjectId, ref:"trackable", required: true },
  _user: {type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
  _application: {type:mongoose.Schema.Types.ObjectId, ref:"application"},
  _witness: {type:mongoose.Schema.Types.ObjectId, ref:"user"},
  note:String,
  quantifier:Number,
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const recordModel = mongoose.model('record', recordSchema);

module.exports = recordModel;
