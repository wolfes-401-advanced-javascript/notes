'use strict';

// const mongoose = require('mongoose');
const Note = require('../lib/model/notes-schema.js');



class Notes {
  constructor(input) {
    this.action = input.action;
    this.payload = input.payload;
    this.category = input.category;
    this.catName = input.catName;
  }

  execute() {
    const action = ['add', 'a', 'list', 'l', 'delete', 'd'];
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
      default:
        console.log('Uh Oh! We have a problem!');
        break;
    }
  }

  add() {
    // let note = new Notes(this.action, this.payload, this.category, this.catName);
    // console.log(new Notes('add', 'testing'));
    console.log('Adding note: ' + this.payload);
    const newNote = new Note( { note: this.payload, category: this.catName } );

    newNote.save()
      .then(results => console.log('saving: ', results))
      .catch(err => console.log('ERROR'));
  }

  list() {
    console.log('listing notes');
    Note.find()
      .then(results => console.log('All our notes', results))
      .catch(err => console.log('Cant find anything'));
  }

  delete() {
    console.log('deleting note');
    Note.findByIdAndDelete(this.payload)
      .then(() => console.log('Its GONE!'))
      .catch(() => console.log('no delete'));
  }

}




module.exports = Notes;