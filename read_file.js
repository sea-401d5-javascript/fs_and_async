const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter;

ee.on('one.txt', () => {
  fs.readFile('./one.txt', (err,data) => {
    if (err) return console.log(err);
    var buffer = new Buffer (data.toString());
    return console.log ('one.txt: ' + (buffer.toString('hex', 0, 8)));
  })
});

ee.on('three.txt', () => {
  fs.readFile('./three.txt', (err,data) => {
    if (err) return console.log(err);
    var buffer = new Buffer(data.toString());
    return console.log('three.txt: ' + (buffer.toString('hex', 0 ,8)));
  })
})

ee.on('two.txt', () => {
  fs.readFile('./two.txt', (err,data) => {
    if (err) return console.log(err);
    var buffer = new Buffer(data.toString());
    return console.log('two.txt: ' + (buffer.toString('hex', 0, 8)));
  })
});



ee.emit('one.txt');
ee.emit('two.txt');
ee.emit('three.txt');
