'use strict'

const fs = require('fs');
const eventEmitter = require('events');
const emitter = new eventEmitter();
const filePaths = ['./files/one.txt', './files/two.txt', './files/three.txt'];
let fileArr = [];

emitter.on('readFile', (data, index) => {
  fileArr.push(data);
  if (fileArr.length === filePaths.length) {
    console.log(fileArr.join(''));
  }
});

function readFiles() {
  fileArr = [];
  fs.readFile(filePaths[0], (err, data) => {
    emitter.emit('readFile', data.toString('utf8', 0, 8));
    fs.readFile(filePaths[1], (err, data) => {
      emitter.emit('readFile', data.toString('utf8', 0, 8));
      fs.readFile(filePaths[2], (err, data) => {
        emitter.emit('readFile', data.toString('utf8', 0, 8));
      });
    });
  });
};
