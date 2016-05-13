'use strict';

const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();
// var testOrder = [];
var reader = module.exports = function(cb){
  let files = []

  fs.readFile(__dirname + '/one.txt', (err, data) => {
    // console.log(data.toString('hex', 0, 8))
    files.push(data.slice(0, 8))
    // testOrder.push(1)
    ee.emit('two');
  })

  ee.on('two', () => {
    fs.readFile(__dirname + '/two.txt', (err, data) => {
      // console.log(data.toString('hex', 0, 8))
      files.push(data.slice(0, 8))
      // testOrder.push(2)
      ee.emit('three')
    })

  })

  ee.on('three', () => {
    fs.readFile(__dirname + '/three.txt', (err, data) => {
      // console.log(data.toString('hex', 0, 8))
      files.push(data.slice(0, 8))
      // testOrder.push(3);
      cb(files);
    })
  })
}

reader((files) => {
  console.log(files)
})

//return testOrder;




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
