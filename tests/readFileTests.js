'use strict';

const async = require('async');
const mocha = require('mocha');
const expect = require('chai').expect;

describe('File reading tests', () => {
  it('should return data in the correct order every time', (done) => {
    let exampleArray = [['first array', 'more data'], ['second array', 'data'], ['third array', 'the most data']];
    let results = [];
    let transformArray = function(array) {
      return array.reverse();
    }
    expect(async.map(exampleArray, transformArray, (err, data) => {
      data.forEach((array => {
        results.push(array[1]);
      }))
      done();
    })).to.eql(['first array', 'second array', 'third array']);
  })
})
