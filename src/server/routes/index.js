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
        return {
          email: user.email,
          // friendsList: req.session.passport.user.friendsList,
          name: user.name,
          status: user.status
        };
      });
      res.send(usersData);
    })


})

router.post('/addfriend', function (req, res) {
  let updatedOptions = {
    name: req.body.name,
    email: req.body.email,
    status: 'friends'
  };

  User.findOneAndUpdate(
    { _id: req.body.id },
    { $push: { friendsList: updatedOptions } },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
    });
})

router.post('/removefriend', function (req, res) {
  let updatedOptions = {
    name: req.body.name,
    email: req.body.email,
    status: ' '
  };


  User.findOneAndUpdate(
    { _id: req.body.id },
    { $pull: { friendsList: updatedOptions } },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log(success);
      }
    });
})

router.post('/ignorefriend', function (req, res) {
  let updatedOptions = {
    name: req.body.name,
    email: req.body.email,
    status: 'pending request'
  };

  User.findOneAndUpdate({ _id: req.params.id }, { $set: updatedOptions }, function (error) {
    if (error) {
      res.send(error);
    } else {
      res.redirect('back')
    }
  });
})

router.post('/cancelrequest', function (req, res) {
  let updatedOptions = {
    name: req.body.name,
    email: req.body.email,
    status: ' '
  };

  User.findOneAndUpdate({ _id: req.params.id }, { $set: updatedOptions }, function (error) {
    if (error) {
      res.send(error);
    } else {
      res.redirect('back')
    }
  });
})

router.get('/login', (req, res) => {
  res.send({ message: 'OK!' });
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

router.post('/addpeopletodb', function (req, res) {

  let newUser = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name
  });

  User.create(newUser, function (err, user) {
    if (err) throw err;
    console.log(user);
  });


  res.redirect('/');
});


module.exports = router;
