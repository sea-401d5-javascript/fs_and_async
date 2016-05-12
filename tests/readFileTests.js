'use strict';

const readFile = require('./readFile.js');
const mocha = require('mocha');
const chai = require('chai');

describe('File reading tests', () => {
  it('should always read the files in order', (done) => {
    let filePaths = ['../files/one.txt', '../files/two.txt', '../files/three.txt'];
    let arrayify = function(i) {

    }
    let asyncMap = async.map(filePaths, fs.readFile, function(err, result) {
      expect(result).to.eql()
    }
    expect(readFile()).to.eql('');
  })
})
