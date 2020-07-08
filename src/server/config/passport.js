const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/users');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({
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
    User.findOne({email: user.email}, function(err, user) {
      done(err, user);
    });
  });
};


