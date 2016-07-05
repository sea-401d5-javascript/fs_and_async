'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const reader = require('../file-async.js');



describe('text test', () => {
  let testFiles = [];

  before((done)=> {
    fs.readFile(__dirname + '/../one.txt', (err,data) => {
      testFiles.push('one.txt: ' + data.toString('hex', 0, 8));
      fs.readFile(__dirname + '/../two.txt', (err, data) => {
        testFiles.push('two.txt: ' + data.toString('hex', 0, 8));

      });
      fs.readFile(__dirname + '/../three.txt', (err, data) =>{
        testFiles.push('three.txt: ' + data.toString('hex', 0, 8));
        (done);
      });
    });
  });
  it('test should read order', () => {
    reader((data)=>{
      expect((data[0]).toString()).to.eql((testFiles[0].toString()));
    });
  });
});
