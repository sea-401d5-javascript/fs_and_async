'use strict';

const fs = require('fs');
const mocha = require('mocha');
const expect = require('chai').expect;
const eventEmitter = require('events');
const emitter = new eventEmitter();
const filePaths = [__dirname + '/../files/one.txt', __dirname + '/../files/two.txt', __dirname + '/../files/three.txt'];
let fileArr = [];
let fileString = '';

describe('File reading tests', () => {

  before('reading files' , (done) => {

    emitter.on('readFile', (data, index) => {
      fileArr.push(data);
      if (fileArr.length === filePaths.length) {
        fileString = fileArr.join('');
        done();
      }
    });

    fs.readFile(filePaths[0], (err, data) => {
      emitter.emit('readFile', data.toString('utf8', 0, 8));
      fs.readFile(filePaths[1], (err, data) => {
        emitter.emit('readFile', data.toString('utf8', 0, 8));
        fs.readFile(filePaths[2], (err, data) => {
          emitter.emit('readFile', data.toString('utf8', 0, 8));
        });
      });
    });
  });

  it('should return data in the correct order', () => {
    expect(fileString).to.eql('Per te pLorem ipCan dis ');
  });
});
