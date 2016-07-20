'use strict';
var bcrypt = require('bcrypt-nodejs')

console.log()

// src/services/global/hooks/parsekey.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    hook.parsekey = true;
  };
};
