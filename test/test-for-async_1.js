'use strict';
const expect = require('chai').expect;
const reader = require('../async_1');
const fs = require('fs');


describe('file read tests', () => {
  let files;
  before((done) => {
    let files = [];
    fs.readFile(__dirname + '/../one.txt', (err, data) => {
      files.push(data.slice(0,8))
      fs.readFile(__dirname + '/../two.txt', (err, data) => {
        files.push(data.slice(0,8))
        fs.readFile(__dirname + '/../three.txt', (err, data) => {
          files.push(data.slice(0,8))
          done()
        })
      })
    })
  })
  it('should test async', (done) => {
    process.nextTick(() => {
      //throw new Error('async fail')
      done();
    })
  })
  it('should read files', (done) => {
    reader((data) => {
      expect(data[0] instanceof Buffer).to.eql(true);
      done();
    })
  })
  it('should read files in order', (done) => {
    reader((data) => {
      expect(data[0].toString()).to.eql(files[0].toString())
      done();
    })
  })
})









// describe ('async read test', () => {
//   it('should return an array of 1, 2, 3.', (done) => {
//     expect(reportShit()).to.eql([1, 2, 3]);
//     done();
//   })
//
//   it('should...', () => {
//     expect().to.eql();
//   })
// })
