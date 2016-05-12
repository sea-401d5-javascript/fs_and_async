const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();

var fileText;

fs.readFile('./one.txt', (err, data) => {
  if (err) return console.log(err);
  fileText = data.toString('hex', 0, 16);
  console.log(fileText, 'first text file');
  ee.emit('test-event', (data) => {
    console.log('EVENT EMITTED ' + data);
  });
});

ee.on('test-event', (data) => {
  fs.readFile('./two.txt', (err, data) => {
    if (err) return console.log(err);
    fileText = data.toString('hex', 0, 16);
    console.log(fileText, 'second text file');
    ee.emit('second-test-event', (data) => {
      console.log('SECOND EVENT EMITTED ' + data);
  });
});

ee.on('second-test-event', (data) => {
  fs.readFile('./three.txt', (err, data) => {
    if (err) return console.log(err);
    fileText = data.toString('hex', 0, 16);
    console.log(fileText, 'third text file');
  });
