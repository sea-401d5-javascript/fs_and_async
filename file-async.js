const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();



fs.readFile('./one.txt', (err, data) => {
  console.log(data.toString('hex',0,8));
  ee.emit('file-two', data);
})

ee.on('file-two', () => {
  fs.readFile('./two.txt', (err, data) => {
    console.log(data.toString('hex',0,8));
    ee.emit('file-three', data);
  })
})


ee.on('file-three', () => {
  fs.readFile('./three.txt', (err, data) => {

    console.log(data.toString('hex',0,8));
  })

})
