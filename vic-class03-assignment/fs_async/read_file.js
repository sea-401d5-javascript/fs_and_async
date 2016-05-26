'use strict'

const fs = require('fs');
const EventEmitter = require('events');
const ee = new EventEmitter();

var reader = module.exports = function(cb) {
  let files = [];

  var fileText;

  fs.readFile(__dirname + '/one.txt', (err, data) => { if (err) {console.log('error', err)};
    fileText = data.toString('hex', 0, 8);
    files.push(fileText);
    ee.emit('Hex-one', fileText);
  });

  ee.on('Hex-one', (data) => {
    console.log('Hex-one ' + data);
    fs.readFile(__dirname + '/two.txt', (err, data) => {

      fileText = data.toString('hex', 0, 8);
      files.push(fileText);
      ee.emit('Hex-two', fileText);
    })
  });

  ee.on('Hex-two', (data) => {
    console.log('Hex-two ' + data);
    fs.readFile(__dirname + '/three.txt', (err, data) => {
      if (err) {console.log(err);
      }

      fileText = data.toString('hex', 0, 8);
      ee.emit('Hex-three', fileText);
      })
    });

  ee.on('Hex-three', (data) => {
    console.log('Hex-three ' + data);
    cb(files);
  })
}

// reader(function(fT){});
