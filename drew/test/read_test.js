'use strict';

const expect = require('chai').expect;
const reader = require('../event_emitter');
const fs = require('fs');

describe('file reading tests', function() {
  let files;
  before((done) => {
    files = [];
    fs.readFile(__dirname + '/../one.txt', (err, data) => {
      var oneData = data.toString();
      var bufferOneData = new Buffer(oneData);
      var bufferOneDataStringed = bufferOneData.toString('hex');
      var bufferOneDataStringedSliced = bufferOneDataStringed.slice(0,8);

      files.push(bufferOneDataStringedSliced)
      fs.readFile(__dirname + '/../two.txt', (err, data) => {
        var twoData = data.toString();
        var bufferTwoData = new Buffer(twoData);
        var bufferTwoDataStringed = bufferTwoData.toString('hex');
        var bufferTwoDataStringedSliced = bufferTwoDataStringed.slice(0,8);

        files.push(bufferTwoDataStringedSliced)
        fs.readFile(__dirname + '/../three.txt', (err, data) => {
          var threeData = data.toString();
          var bufferThreeData = new Buffer(threeData);
          var bufferThreeDataStringed = bufferThreeData.toString('hex');
          var bufferThreeDataStringedSliced = bufferThreeDataStringed.slice(0,8);

          files.push(bufferThreeDataStringedSliced)
          done();
        });
      });
    });
  });

  it('should read files in order', (done) => {
    reader((data) => {
      expect(data[0].toString()).to.eql(files[0].toString());
      done();
    });
  });
});
