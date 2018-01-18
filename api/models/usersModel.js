'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {
    type: Number
  },
  firstName: {
    type: String,
    required: 'Please enter your firstname'
  },
  lastName: {
    type: String,
    required: 'Please enter your lastname'
  },
  dateOfBirth: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('users', UserSchema);
