const { keys } = require('./constants');
let connection;

const handleUserInput = function(stdin, connection) {
  stdin.on('data', (data) => {
    if (data === '\u0003') { 
      // allows user to exit stdin interface with 'ctrl+C'
      console.log('Good Bye');
      process.exit();
    } else {
      connection.write(keys[data])
    }
  });
};

const setupInterface = function(conn) {
  // creates a user input interface
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin, connection);
  return stdin;
};

module.exports = setupInterface;