'use strict';

const async = require('async');
const mocha = require('mocha');
const expect = require('chai').expect;

//Test doesn't work... I'm pretty sure that I'm not using the done callback correctly and I'm pretty sure my transformArray function is completely messed up.. haha.

describe('File reading tests', () => {
  it('should return data in the correct order every time', (done) => {
    let exampleArray = [['first array', 'more data'], ['second array', 'data'], ['third array', 'the most data']];
    let results = [];
    let count = 0;

    function transformArray(array, callback) {
      console.log('simulating asynch');
      setTimeout(() => {
        count++;
        if (count === 3) done();
        callback(array.reverse());
      }, 1000);

    }
    expect(async.map(exampleArray, transformArray, (err, data) => {
      if (err) console.log(err);
      console.log(data);
      data.forEach((array) => {
        results.push(data);
      })
    })).to.eql(['first array', 'second array', 'third array']);
  })
})
