const expect = require('chai').expect;
const async_1 = require('../async_1');



describe ('async read test', () => {
  it('should return an array of 1, 2, 3.', (done) => {
    expect(reportShit()).to.eql([1, 2, 3]);
    done();
  })

  it('should...', () => {
    expect().to.eql();
  })
})
