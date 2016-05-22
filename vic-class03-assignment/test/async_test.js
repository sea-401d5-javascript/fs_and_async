'use strict';

const expect = require('chai').expect;
const reader = require(__dirname + '/../fs_async/read_file');
const fs = require('fs');

describe('async tests', function() {
  let files;
  var filetext;
  before((done) => {
    files = [];
    fs.readFile(__dirname + '/../fs_async/one.txt', (err, data) => {
      console.log('1', data);
      console.log(err);
      filetext = data.toString('hex', 0, 8);
      files.push(filetext);
      fs.readFile(__dirname + '/../fs_async/two.txt', (err, data) => {
        console.log('2', data);
        filetext = data.toString('hex', 0, 8);
        files.push(filetext);
        fs.readFile(__dirname + '/../fs_async/three.txt', (err, data) => {
          console.log('3', data);
          filetext = data.toString('hex', 0, 8);
          files.push(filetext);
          console.log('files: ' + files);
          done();
        });
      });
    });
  });
  it('should test for async', (done) => {
    process.nextTick(() => {
      done();
    });
  });
  it('should show me the order the text files are read', (done) => {
    reader((data) => {
      expect(data[0].toString()).to.eql(files[0].toString());
      done();
    });
  });
});
