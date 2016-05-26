'use strict'
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter;

const reader = module.exports = function(cb) {
  let files = [];
  fs.readFile('./one.txt', (err, data) => {
    if (err) return console.log(err);
    files.push('one.txt: ' + (data.toString('hex', 0, 8)));
    ee.emit('two.txt');
  });

  ee.on('two.txt', () => {
    fs.readFile('./two.txt', (err, data) => {
      if (err) return console.log(err);
      files.push('two.txt: ' + (data.toString('hex', 0, 8)));
      ee.emit('three.txt');
    });
  });

  ee.on('three.txt', () => {
    fs.readFile('./three.txt', (err, data) => {
      if (err) return console.log(err);
      files.push('three.txt: ' + (data.toString('hex', 0, 8)));
      console.log(files);
      cb(files);

    });
  });
};

reader((files) => {
  return files
 });
