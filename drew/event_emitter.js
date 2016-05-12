const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();

ee.on('one-read', (data) => {
  var one = data.toString();
  var b = new Buffer(one);
  var c = b.toString();
  var d = c.slice(0,8);
  console.log('the first 8 bytes of file one read: ', d);
})

fs.readFile('./one.txt', (err,data) => {
  ee.emit('one-read', data)
})

ee.on('file-two-read', (data) => {
  var one = data.toString();
  var b = new Buffer(one);
  var c = b.toString();
  var d = c.slice(0,8);
  console.log('the first 8 bytes of file two read: ', d);
})

fs.readFile('./two.txt', (err,data) => {
  ee.emit('file-two-read', data)
})

ee.on('file-three-read', (data) => {
  var one = data.toString();
  var b = new Buffer(one);
  var c = b.toString();
  var d = c.slice(0,8);
  console.log('the first 8 bytes of file three read: ', d);
})

fs.readFile('./three.txt', (err,data) => {
  ee.emit('file-three-read', data)
})
