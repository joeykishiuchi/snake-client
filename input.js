const handleUserInput = function(stdin) {
  stdin.on('data', (data) => {
    if (data === '\u0003') { 
      // allows user to exit stdin interface with 'ctrl+C'
      console.log('Good Bye');
      process.exit();
    }
  });
};

const setupInterface = function() {
  // creates a user input interface
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};

module.exports = setupInterface;