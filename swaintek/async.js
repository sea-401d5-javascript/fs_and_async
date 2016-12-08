const EventEmitter = require('events');
const fs = require ('fs');
const ee = new EventEmitter();

ee.on('one', () => {
  fs.readFile('one.txt', (err, data) => {
      console.log(data.slice(0,8));
    });
});

ee.on('two', () => {
  fs.readFile('two.txt', (err, data) => {
      console.log(data.slice(0,8));
    });
});

ee.on('three', () => {
  fs.readFile('three.txt', (err, data) => {
      console.log(data.slice(0,8));
    });
});

ee.emit('one');
ee.emit('two');
ee.emit('three');
