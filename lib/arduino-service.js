const SerialPort = require('serialport');
const config = require('../config');

const arduino = new SerialPort(config.arduino.port)

const OPEN = new Buffer(1);
const CLOSE = new Buffer(0);


function send(port, state) {
  return arduino.write(port, (err) => {
    if (err) return Promise.reject(err);
    return arduino.write(state, (err) => {
      if (err) return Promise.reject(err);
      return Promise.resolve();
    });
  });
}

function open(port) {
  return send(new Buffer(port), OPEN);
}

function close(port) {
  return send(new Buffer(port), CLOSE);
}

module.exports = {
  open,
  close
};
