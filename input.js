let connection;

const handleUserInput = function(stdin, connection) {
  stdin.on('data', (data) => {
    if (data === '\u0003') { 
      // allows user to exit stdin interface with 'ctrl+C'
      console.log('Good Bye');
      process.exit();
    } else if (data === 'w') {
      connection.write('Move: up');
    } else if (data === 'a') {
      connection.write('Move: left');
    } else if (data === 's') {
      connection.write('Move: down');
    } else if (data === 'd') {
      connection.write('Move: right');
    } else if (data === 'h') {
      connection.write('Say: Hey, wazzap!');
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