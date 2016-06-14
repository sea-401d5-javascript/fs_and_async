var mocha = require('mocha');
var expect = require('chai').expect;
var readerFile = require('../file_read.js');

describe('Reader', function() {
  before(function(done) {
    readerFile.reader('one', done);
  });
  it('it should read the first file and return the correct string of eight hexes', function() {
    var results = readerFile.results[0];
    var expected = '4f4e45204953204d';

    expect(results).to.deep.equal(expected);
  });
  it('it should read the second file and return the correct string of eight hexes', function() {
    var results = readerFile.results[1];
    var expected = '54574f204953204d';

    expect(results).to.deep.equal(expected);

  });
  it('it should read the third file and return the correct string of eight hexes', function() {
    var results = readerFile.results[2];
    var expected = '5448524545204953';

    expect(results).to.deep.equal(expected);
  })
})
