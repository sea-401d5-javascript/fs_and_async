'use strict';

const expect = require('chai').expect;
const mainReader = require('../main.js');
const fs = require('fs');

describe('readFile processes', () => {
  let files;
  before((done) => {
    files = [];
    fs.readFile(__dirname + '/../text_files/one.txt', (err, data) => {
      console.log('one');
      files.push(data.slice(0, 8));
      fs.readFile(__dirname + '/../text_files/two.txt', (err, data) => {
        console.log('two');
        files.push(data.slice(0, 8));
        fs.readFile(__dirname + '/../text_files/three.txt', (err, data) => {
          console.log('three');
          files.push(data.slice(0, 8));
          done();
        });
      });
    });
  });

  it('should read files correctly', () => {
    mainReader((files) => {
      expect(Buffer.isBuffer(files[0])).to.equal(true);
      done();
    });
  });

  it('should keep files in correct order', (done) => {
    mainReader((data) => {
      expect(data[0].toString()).to.eql(files[0].toString());
    });
  });
});
