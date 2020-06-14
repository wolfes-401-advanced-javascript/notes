'use strict';

// const mongoose = require('mongoose');
const Note = require('../lib/model/notes-schema.js');
const collection = require('./model/notes-collection');


class Notes {
  constructor(input) {
    this.action = input.action;
    this.payload = input.payload;
    this.category = input.category;
    this.catName = input.catName || 'General';
  }

  execute() {
    console.log(this.action);
    switch (this.action) {
    case 'add': 
    case 'a':
      this.add();
      break;
    case 'list':
    case 'l':
      this.list();
      break;
    case 'delete':
    case 'd':
      this.delete();
      break;
    case 'update':
    case 'u':
      this.update();
      break;  
    default:
      console.log('Uh Oh! We have a problem!');
      break;
    }
  }

  add() {
    console.log('Adding note: ' + this.payload);
    collection.create(this);
  }

  list() {
    console.log('listing notes');
    collection.get(this);
  }

  delete() {
    console.log('deleting note');
    collection.remove(this);
  }

  update() {
    console.log('updating note');
    collection.update(this);
  }
}




module.exports = Notes;