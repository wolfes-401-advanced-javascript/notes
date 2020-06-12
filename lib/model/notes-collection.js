'use strict';

const schema = require('./notes-schema');

function create(input) {
  let newNote = new schema( { note: input.payload, category: input.catName } );
  console.log('this is a new note', newNote);
  newNote.save()
    .then(results => console.log('saving: ', results))
    .catch(err => console.log('ERROR'));
}

function get(input) {
  schema.find()
    .then(results => console.log('All our notes', results))
    .catch(err => console.log('Cant find anything'));
}

// delete is a reserved word, so I used remove instead.
function remove(input) {
  schema.findByIdAndDelete(input.payload)
    .then(() => console.log('Its GONE!'))
    .catch(() => console.log('no delete'));
}

function update(input) {
  schema.findByIdAndUpdate(input.id, input.payload, {
    new: true })
    .then(() => console.log('Updated!'))
    .catch(() => console.log('Update error!'));
}

module.exports = {
  create,
  get,
  remove,
  update,
};