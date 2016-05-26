'use strict'

const fs = require('fs');
const async = require('async');
const filePaths = ['./files/one.txt', './files/two.txt', './files/three.txt'];

let readFiles = module.exports = function(filePaths, fn, encoding, cb) {
  let files = '';
  async.map(filePaths, fn, function(err, file) {
    if (err) console.log(err);
    file.forEach((buffer) => {
      files += buffer.toString(encoding, 0, 8);
    });
    console.log('within function', files);
    if (cb) done();
    return files;
  });
}

// readFiles(filePaths, fs.readFile, 'hex');
