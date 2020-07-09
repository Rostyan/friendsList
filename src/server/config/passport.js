const LocalStrategy = require('passport-local').Strategy;
const Users = require('../model/users');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      Users.findOne({
        email: email,
        password: password
      }).then(user => {
        if(!user) {
          return done(null, false);
        }
        return done(null, user);        
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    Users.findOne({role: user.role}, function(err, user) {
      done(err, user);
    });
  });
};