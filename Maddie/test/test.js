'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const reader = require('../read_file.js');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter;


describe('reading files', () => {
  let testFiles = [];
  before((done) => {

    fs.readFile(__dirname + '/../one.txt', (err, data) => {
      testFiles.push('one.txt: ' + data.toString('hex', 0, 8));

      fs.readFile(__dirname + '/../two.txt', (err, data) => {
        testFiles.push('two.txt: ' + data.toString('hex', 0, 8));

      })
      fs.readFile(__dirname + '/../three.txt', (err, data) => {
        testFiles.push('three.txt: ' + data.toString('hex', 0, 8));
        done();
      });

    });

  });

  it('should read in order', () => {
    reader((data) => {
      expect((data[0]).toString()).to.eql((testFiles[0].toString()));

    });
  });
});
