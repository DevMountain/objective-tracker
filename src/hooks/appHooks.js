'use strict';

// Add any common hooks you want to share across services in here.
//
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

const Application = require('../services/application/application-model');
const Trackable = require('../services/trackable/trackable-model');
const User = require('../services/user/user-model');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

exports.verifyQueryToken = function(queryApp){
  return function(hook){
    var query = {name:hook.params.query.application};
    return Application.findOne(query)
    .then(function(response){
      if (!response){
        throw new error("Application not found");
      }
      var decoded = jwt.verify(hook.params.query.token, response.appSecret);

      delete decoded.iat;
      if(queryApp){
          decoded._application = response._id;
      }

      console.log(decoded);
      hook.params.query = decoded;
      return hook;
    })
  }
}

exports.getApp = function(options) {
  return function(hook) {
    return Application
      .findOne({name:hook.data.application})
      .then(function(response){
        hook.app = response;
        hook.data._application = hook.app._id;
        if (!hook.app.appSecret){
          throw new Error('You are not authorized. Must send the App you are authorizing through.');
        }
        return hook;
      })
  };
};

exports.decodeToken = function(options) {
  return function(hook) {
    hook.decodedToken = jwt.verify(hook.data.token, hook.app.appSecret);
    Object.assign(hook.data, hook.decodedToken);
    //return hook;
  };
};

exports.getTrackable = function(options) {
  return function(hook) {
    return Trackable.findOne({
      name:hook.decodedToken.trackable,
      _application:mongoose.Types.ObjectId(hook.app._id)}
    ).then(function(response){
      if(!response){
        return Trackable.create(
          {name:hook.decodedToken.trackable,
          _application:hook.app._id,
          category:"Uncategorized"})
          .then(function(response){
          hook.data._trackable = response._id;
        })
      }else{
        hook.trackable = response;
        hook.data._trackable = response._id;
        return hook
      }

      });
  };
};

exports.getUser = function(options){
  return function(hook){
  if (!hook.decodedToken.user){
    throw new Error('User devmtnId is missing');
  }
    return User.findOne({devmtnId:hook.decodedToken.user})
    .then(function(response){
      if(!response){
        return User.create({devmtnId:hook.decodedToken.user}).then(function(response){
          hook.user = response;
          hook.data._user = response._id;
          return hook;
        })
      }else{
        hook.user = response;
        hook.data._user = response._id;
        return hook;
      }
    })
  }
}

exports.getWitness=function(options){
  return function(hook){
    if(hook.data.witness){
      return User.findOne({devmtnId:hook.decodedToken.witness})
      .then(function(response){
        if(!response){
          return User.create({devmtnId:hook.decodedToken.witness}).then(function(response){
            hook.witness = response;
            hook.data._witness = response._id;
            return hook;
          })
        }else{
          hook.witness = response;
          hook.data._witness = response._id;
          return hook;
        }
      });
    }
  }
}
