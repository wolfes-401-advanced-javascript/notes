'use strict';

require('dotenv').config();

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('open', () => {
});


const input = new Input;
                                                                          
if (input.validate(input) === true) {
  let noteAction = new Notes(input);
  noteAction.execute(input);
  // addNotes.add(input);
  
} else {
  console.error('Houston, we have a problem! You must include flags.');
}