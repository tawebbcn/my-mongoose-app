'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ducks: [{
    type: ObjectId,
    ref: 'Duck'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
