'use strict';

class Notes {
  constructor(action, payload) {
    this.action = action;
    this.payload = payload;
    this.id = Math.floor(Math.random()*1000);
  } 

  execute() {
    const action = ['add', 'a'];
    switch(action.includes(this.action)) {
    case 'add' || 'a':
      Notes.add;
      break;
  
    }
  }

  add() {
    let note = new Notes(this.action, this.payload);
    return note;
  }
}


console.log(new Notes('add', 'testing'));

module.exports = Notes;