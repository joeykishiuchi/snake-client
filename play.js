const connect = require('./client.js');
console.log('Connecting ...');
connect(); // creates connection from client.js

const setupInterface = function() {
  // creates a user input interface
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    if (data === '\u0003') { 
      // allows user to exit stdin interface with 'ctrl+C'
      console.log('Good Bye');
      process.exit();
    }
  });
  return stdin;
};

setupInterface();``