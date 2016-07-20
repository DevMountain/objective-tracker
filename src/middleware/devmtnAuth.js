
var devmtnAuth = require('devmtn-auth');
var devmtnStrategy = devmtnAuth.Strategy;

var User = require('../')

module.exports = function(app){
   app.get('/auth/devmtn', function(req, res, next){

   })

   app.get('/auth/devmtn/callback', function(req, res, next){

   })

}
