'use strict'

const expect = require('chai').expect;
const async = require('../fs_async/fs_async.js');
const fs = require('fs');

describe('async tests', () => {
  it('should tell me the order the text files are read', (done) => {
    (fs.readFile('../fs_async/one.txt')), function(err, data) {
      if (err) {
        throw 'Unable to read file';
      }
      expect(fs.readFile('../fs_async/one.txt')).to.eql(two);
      done;
    }
  });
})
