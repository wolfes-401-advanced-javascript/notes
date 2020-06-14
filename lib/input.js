'use strict';

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

console.log(args);

let action = (Object.keys(args).slice(-1));
let message = (Object.values(args).slice(-1));

class Input {
  constructor() {
    this.action = action[0];
    this.payload = message[0];
    this.category = action[1];
    this.catName = message[1];
  }
  validate() {
    const ops = ['a', 'add', 'l', 'list', 'd', 'delete', 'u', 'update'];
    
    const emptyString = '';
    console.log(this.action);

    return (ops.includes(this.action))  && (this.payload !== emptyString);
  }
}



//console.log(new Input(args, action));
module.exports = Input;