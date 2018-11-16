'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const duckSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const Duck = mongoose.model('Duck', duckSchema);

module.exports = Duck;
