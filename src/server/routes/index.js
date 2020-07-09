const express = require('express');
const router = express.Router();
const User = require('../model/users');
const { ensureAuthenticated } = require('../config/auth');
const passport = require('passport');

router.get('/', ensureAuthenticated, function (req, res) {
  
  res.send({
    name: req.session.passport.user.name,
    email: req.session.passport.user.email,
  })
});

router.get('/friend', function (req, res) {
  User.find({})
  
  .then(user => {
    let usersData = user.map((user) => {
      return {email: user.email, 
              friendsList: req.session.passport.user.friendsList,
              name: user.name,
              status: user.status
            };
    });
    res.send(usersData);
})


})

router.post('/addfriend', function (req, res) {
  
})

router.post('/removefriend', function (req, res) {

})

router.get('/login', (req, res) => {
  res.send({message: 'OK!'});
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res, next);
});

router.get('/logout', function (req, res) {
  req.logout();

  res.redirect('/login');
});

router.post('/signup', function (req, res) {

  let newUser = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name
    });

    User.create(newUser, function (err, user) {
      if (err) throw err;
      console.log(user);
    });


  res.redirect('/login');
});


module.exports = router;
