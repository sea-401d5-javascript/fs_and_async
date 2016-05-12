const expect = require('chai').expect;
const reader = require('../ee/event-emitter.js');

describe('file read tests', () => {
  it('should test async', (done) => {
    process.nextTick(() => {
      throw new Error('async stuff')
      done();
    })
  })
  it('should read files in order', (done) => {
    reader((files) => {
      expect(Buffer.isBuffer(files[0])).to.eql(true);
      done();
      })
    })
})
