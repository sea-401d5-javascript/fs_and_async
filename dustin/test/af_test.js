const chai = require('chai');
const expect = chai.expect;
const filereader = require('../async_file_reader.js')

describe('Testing the ascync', () => {
  it('Loading and checking files', function () {
      expect(logger).to.eql('4f4e453a204c6574\n54574f3a20546865\n54485245453a2046\n')
  })
})
