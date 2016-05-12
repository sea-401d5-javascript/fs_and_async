const EventEmitter = module.exports = require('events').EventEmitter;
const fs = module.exports = require('fs');
const ee = module.exports = new EventEmitter();

ee.on('file-one-read', (data) => {
  fs.readFile('./two.txt', (err,data) => {
    ee.emit('file-two-read', data)
  })
  var oneData = data.toString();
  var bufferOneData = new Buffer(oneData);
  var bufferOneDataStringed = bufferOneData.toString('hex');
  var bufferOneDataStringedSliced = bufferOneDataStringed.slice(0,8);
  console.log('the first 8 bytes of file one read: ', bufferOneDataStringedSliced);
})

fs.readFile('./one.txt', (err,data) => {
  console.log(data);
  ee.emit('file-one-read', data)
})

ee.on('file-two-read', (data) => {
  fs.readFile('./three.txt', (err,data) => {
    ee.emit('file-three-read', data)
  })
  var twoData = data.toString();
  var bufferTwoData = new Buffer(twoData);
  var bufferTwoDataStringed = bufferTwoData.toString('hex');
  var bufferTwoDataStringedSliced = bufferTwoDataStringed.slice(0,8);
  console.log('the first 8 bytes of file two read: ', bufferTwoDataStringedSliced);
})

ee.on('file-three-read', (data) => {
  var threeData = data.toString();
  var bufferThreeData = new Buffer(threeData);
  var bufferThreeDataStringed = bufferThreeData.toString('hex');
  var bufferThreeDataStringedSliced = bufferThreeDataStringed.slice(0,8);
  console.log('the first 8 bytes of file three read: ', bufferThreeDataStringedSliced);
})
