'use strict'

const fs = require('fs');
const async = require('async');
const filePaths = ['./files/one.txt', './files/two.txt', './files/three.txt'];

async.map(filePaths, fs.readFile, function(err, file) {
  if (err) console.log(err);
  file.forEach((buffer) => {
    console.log(buffer.toString('hex', 0, 8));
  })
})
