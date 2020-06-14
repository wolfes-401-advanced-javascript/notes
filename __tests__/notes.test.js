'use strict';

const Notes = require('../lib/notes.js');
const supergoose = require('cf-supergoose');

const spy = jest.spyOn(global.console, 'log');

describe('Tests the add and list functions', () => {
  it('should return the console logs and insert a new note to the collection', () => {
    const myNotes = new Notes({a: 'Global Test'});
    myNotes.execute();
    expect(spy).toHaveBeenCalled();
    const myNewNote = new Notes({l: 'Global Test'});
    myNewNote.execute();
    expect(myNewNote).not.toEqual(undefined);
  });
});

describe('Tests the delete function', () => {
  it('should return the console logs and delete a note from the collection', () => {
    const myNotes = new Notes({a: 'New note to insert/delete'});
    myNotes.execute();
    expect(spy).toHaveBeenCalled();
    const deleteMyNote = new Notes({d: myNotes.id});
    deleteMyNote.execute();
    const myNewNote2 = new Notes({l: 'Global Test'});
    myNewNote2.execute();
    expect(myNewNote2.action).toEqual(undefined);
  });
});

