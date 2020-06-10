'use strict';

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
console.log(args);
let action = (Object.keys(args).slice(1).toString());
console.log(action);

class Input {
  constructor(args, action) {
    this.action = action;
    this.payload = args.a;
  }
}

console.log(new Input(args, action));
module.exports = Input;