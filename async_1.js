'use strict';
const async_1 = exports = module.exports;
const fs = require('fs');
const files = ['one.txt', 'two.txt', 'three.txt'];
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();
var testOrder = [];

fs.readFile('./one.txt', (err, data) => {
  console.log(data.toString('hex', 0, 8))
  testOrder.push(1)
  ee.emit('two');
})

ee.on('two', () => {
  fs.readFile('./two.txt', (err, data) => {
    console.log(data.toString('hex', 0, 8))
    testOrder.push(2)
    ee.emit('three')
  })

})

ee.on('three', () => {
  fs.readFile('./three.txt', (err, data) => {
    console.log(data.toString('hex', 0, 8))
    testOrder.push(3);
    ee.emit('woop!');
  })
})

async_1.reportShit = function(){
  console.log('hey')
  return testOrder;
}


//======= looped solution to work on later

// var eeArr = ['one', 'two', 'three'];

// for (var i = 0; i < eeArr.length; i++){
//
//   ee.on(eeArr[i], () => {
//     fs.readFile('./' + eeArr[i] + '.txt', (err, data) => {
//       console.log(data.toString('utf8', 0, 8));
//       ee.emit(eeArr[i + 1]);
//     });
//   });
//   if (eeArr[i] === 'one') ee.emit(eeArr[i]);
// };
