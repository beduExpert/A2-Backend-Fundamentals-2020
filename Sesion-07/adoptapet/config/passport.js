var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  Usuario.findOne({ email: email }).then(function (user) {
    if (!user || !user.validarPassword(password)) {
      return done(null, false, { errors: { 'email o contraseña': 'equivocado(a)' } });
    }
    return done(null, user);
  }).catch(done);
}));