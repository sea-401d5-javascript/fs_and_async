const expect = require('chai').expect
const text = require('../file-async')

describe('text test', () => {
  it('test should log first 8 bites', (done) => {
    expect(text()).to.eql('hex');
    done();
  })
})
