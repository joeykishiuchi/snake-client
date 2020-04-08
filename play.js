const connect = require('./client');
const setupInterface = require('./input');
console.log('Connecting ...');
// creates connection from client.js
connect();
// creates stdin interface from input.js
setupInterface(); 