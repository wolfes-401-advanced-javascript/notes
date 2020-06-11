'use strict';

const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  category: {type: String, required: true},
  note: {type: String, required: true},
});

module.exports = mongoose.model('request', requestSchema);
