'use strict'

module.exports = module = {};

const fs = require('fs');
const async = require('async');
const filePaths = ['./files/one.txt', './files/two.txt', './files/three.txt'];


var mapped = async.map(filePaths, readFile, function(err, files) {
  if (err) console.log(err);
  console.log(files);
})

var readFile = fs.readFile(file, function(callback) {
  console.log(file.toString('hex', 0, 8));
  })
