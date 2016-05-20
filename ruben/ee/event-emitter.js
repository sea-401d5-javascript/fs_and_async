'use strict';
const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();

var reader = module.exports = function() {
  let files = [];
  fs.readFile(__dirname + '/../fs/one.txt', (err, data) => {
    console.log(data.slice(0, 8));
    ee.emit('file-read');
  });

  ee.on('file-read', () => {
    fs.readFile(__dirname + '/../fs/two.txt', (err, data) => {
      console.log(data.slice(0, 8));
    });
  });

  ee.on('file-read', () => {
    fs.readFile(__dirname + '/../fs/three.txt', (err, data) => {
      files.push(data.slice(0, 8));
      cb(files);
    });
  });
}

reader(() => {
  console.log(files);
})
