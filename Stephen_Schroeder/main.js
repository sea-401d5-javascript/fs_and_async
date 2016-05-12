const main = exports = module.exports;
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();

var fileList = ['text_files/one.txt', 'text_files/two.txt', 'text_files/three.txt'];

var finalArray = [];

fs.readFile('text_files/one.txt', (err, data) => {
  console.log(data.toString('hex', 0, 8));
  finalArray.push(0);
  ee.emit('one');
})

ee.on('one', () => {
  fs.readFile('text_files/two.txt', (err, data) => {
    console.log(data.toString('hex', 0, 8));
    finalArray.push(1);
    ee.emit('two');
  })
})

ee.on('two', () => {
  fs.readFile('text_files/three.txt', (err, data) => {
    console.log(data.toString('hes', 0, 8));
    finalArray.push(2);
  })
})

main.runIt = () => {
  return finalArray;
}

debugger;
