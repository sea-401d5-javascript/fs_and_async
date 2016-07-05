'use strict';
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();

const reader = module.exports = function(cb) {
  let files = [];
  fs.readFile('./one.txt', (err, data) => {
    if (err) return console.log(err);
    files.push('one.txt: ' + (data.toString('hex',0,8)));
    ee.emit('file-two', data);
  });

  ee.on('file-two', () => {
    fs.readFile('./two.txt', (err, data) => {
      files.push('two.txt: ' + (data.toString('hex',0,8)));
      ee.emit('file-three', data);
    });
  });


  ee.on('file-three', () => {
    fs.readFile('./three.txt', (err, data) => {
      if (err) return console.log(err);
      files.push('three.txt' + (data.toString('hex',0,8)));
      cb(files);
    });

  });
};

reader((files) => {
  return files;
});
