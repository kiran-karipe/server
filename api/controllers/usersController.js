'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('users');

exports.index = function(req,res) {
  User.find({})
    .then((users) => {
      res.status(200).json({ users: users })
    });
};

exports.create = function(req,res) {
  User.findOne({firstName: req.body.firstName})
    .then((existingUser) => {
      if(existingUser) {
        console.log("Existing User" + existingUser);
        res.status(400).send({"error": `User with firstName ${req.body.firstName} already exists.`})
      } else {
        console.log(req.body);
        var new_user = new User(req.body);
        new_user.save(function(err, user) {
          if(err) {
            res.send(err);
          }
          res.status(201).json({ user: user });
        });
      }
    });
};

exports.show = function(req,res) {
  User.findById(req.params.id, function(err, user) {
    console.log(err);
    if(err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.update = function(req,res) {
  User.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
    if(err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.delete = function(req,res) {
  User.remove({_id: req.params.id}, function(err, user){
    if(err) {
      res.send(err);
    }
    res.json({message: 'User successfully deleted.'});
  });
};
