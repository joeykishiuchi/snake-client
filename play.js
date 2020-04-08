const connect = require('./client');
const setupInterface = require('./input');
console.log('Connecting ...');
// creates stdin interface from input.js
setupInterface(connect());