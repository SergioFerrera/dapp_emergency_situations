var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

/* GET home page. */
router.get('/', controllers.HomeController.index);

/* GET and POST registration page. */ 
router.get('/registro', controllers.UserController.getSignUp);
router.post('/registro', controllers.UserController.postSignUp);

/* GET emergency form page. */ 
router.get('/solicitud', controllers.UserController.getEmergency);

/* POST login. */ 
router.post('/', passport.authenticate('local', {
    successRedirect : '/solicitud',
    failureRedirect : '/',
    failureFlash : true
}));

/* GET logout page. */
router.get('/cierre_sesion', controllers.UserController.logout);

module.exports = router;
