'use strict';

const mongoose = require('mongoose');
const Request = require('../lib/model/notes-schema.js');

mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newRequest = new Request({ url: 'http//localhost:3000', method: 'POST' });

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
    switch (action.includes(this.action)) {
      case 'add' || 'a':
        Notes.add;
        break;
      case 'list' || 'l':
        Notes.list;
        break;
      case 'delete' || 'd':
        Notes.delete;
        break;
      default:
        console.log('Uh Oh! We have a problem!');
        break;
    }
  }

  add() {
    let note = new Notes(this.action, this.payload, this.category, this.catName);
    // console.log(new Notes('add', 'testing'));
    console.log('Adding note: ' + this.payload);

    newRequest.save()
      .then(results => console.log('saving: ', results))
      .catch(err => console.log('ERROR'));
  }
}




module.exports = Notes;