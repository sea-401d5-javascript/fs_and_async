'use strict';

const fs = require('fs');
const Buffer = require('buffer').Buffer;
const mocha = require('mocha');
const expect = require('chai').expect;
const readFile = require('../readFile');
let file1 = 'first sample text';
let file2 = 'second sample text';
let file3 = 'third sample text';
let testFiles = [file1, file2, file3];
let testFilePaths = [__dirname + '/../files/0.txt', __dirname + '/../files/1.txt', __dirname + '/../files/2.txt']

describe('File reading tests', () => {
  before('writing files' , () => {
    testFiles.forEach((file) => {
      fs.writeFileSync(__dirname + '/../files/' + testFiles.indexOf(file) + '.txt', file);
    })
  })
  it('should return data in the correct order every time', (done) => {
    let result = readFile(testFilePaths, fs.readFile, 'utf8', done);
    expect(readFile(testFilePaths, fs.readFile, 'utf8')).to.eql('firststringmoredatalotsofdata');
  });
});
