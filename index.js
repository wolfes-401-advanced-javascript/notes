'use strict';

console.log('App EXISTS');

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let parsed = new Input(process.argv.slice(2));
let notes = new Notes(parsed);