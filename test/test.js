const expect = require('chai').expect;
const read_file = require('../read_file.js');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter;

describe('one.txt', () => {
  it('should console.log one.txt', (done) => {
    expect(ee.emit('one_text')).to.eql('5468652057617272');
    done();
    })  
  })
