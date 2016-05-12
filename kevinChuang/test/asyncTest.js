const mocha = require('mocha');
const expect = require('chai').expect;
const asyncReader = require('../asyncReader');

describe('Async read test', () => {
  it('should read text from text files as 8 byes of hex', function(done) {
    setTimeout(function() {
      try {
        expect(asyncReader.textOne
          && asyncReader.textTwo
          && asyncReader.textThree
        ).to.not.eql(undefined);
        done();
      } catch (e) {
        done(e);
      }
    },0)
  })
});

describe('Async order test', ()=> {
  it('should log the right text hex', function(done) {
    setTimeout(function() {
      try {
        expect(asyncReader.textOne
          + ' ' + asyncReader.textTwo
          + ' ' + asyncReader.textThree
        ).to.eql('5468697320697320 436f666665652069 4173796e63206973');
        done();
      } catch (e) {
        done(e);
      }
    },0)
  })
})

// I do not know how to particularly test that my hex output is in order because
// with my script console logging the values in order inherently places the
// values in order. I thought maybe if I were able to read the output on the
// actual console and compare the asyncReader export variables to the
// console output, that would be a way to "prove" the values are in order.
// Alas I do not know how to read console outputs at this time.
