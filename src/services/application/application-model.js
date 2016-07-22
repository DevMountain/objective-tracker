'use strict';

// application-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const randomstring = require('randomstring');

const applicationSchema = new Schema({
  name: { type: String, required: true, unique:true },
  appSecret:String,
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

applicationSchema.pre('validate', function(next){
  var newApp = this;
  applicationModel.findOne({name:this.name},function(err, response){
    if (!response){
      if (!newApp.appSecret){
        newApp.appSecret = randomstring.generate();
        return next();
      }
    }
    var err = new Error('App name already registered.')
    next(err);
  });

  // next();
})

const applicationModel = mongoose.model('application', applicationSchema);


module.exports = applicationModel;
