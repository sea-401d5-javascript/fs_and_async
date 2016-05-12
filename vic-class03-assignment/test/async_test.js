const expect = require('chai').expect;
const async = require('../fs_async/fs_async.js');
const fs = require('fs');
var one = fs.readFile('../fs_async/one.text');
var two = fs.readFile('./two.text');
var three = fs.readFile('./three.text');

describe('async tests', () => {
  it('should tell me the order the text files are read', (done) => {
    one, function(err, data) {
      if (err) {
        throw 'Unable to read file';
      }
      expect(one).to.eql(two);
      done;
    }
  });
})
