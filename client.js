const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8'); //sets any incoming data to utf8
  conn.on('data', (data) => { 
    // when ideled, prints out 'you ded cuz you idled' before exiting
    console.log(data);
  });

  return conn;
}

module.exports = connect;