const expect = require('chai').expect;
const readFile = require('../read_file.js');


describe('async test', () => {
  it('async working', () => {
    expect(readFile.fileContent).to.eql('adsf');
  })
});
