const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();

var fileContent;

ee.on('files/one.txt', (data) => {
  fileContent = data.toString('hex', 0, 8);
  console.log('first hex code: ', fileContent);
  fs.readFile('files/two.txt', (err, data) => {
    if (err){
      console.log(err);
    }else{
      ee.emit('files/two.txt', data);
    }
  });
});

ee.on('files/two.txt', (data) => {
  fileContent = data.toString('hex', 0, 8);
  console.log('second hex code: ', fileContent);
  fs.readFile('files/three.txt', (err, data) => {
    if (err){
      console.log(err);
    }else{
      ee.emit('files/three.txt', data);
    }
  });
});

ee.on('files/three.txt', (data) => {
  fileContent = data.toString('hex', 0, 8);
  console.log('third hex code: ', fileContent);
});

fs.readFile('files/one.txt', (err, data) => {
  if (err){
    console.log(err);
  }else{
    ee.emit('files/one.txt', data);
  }
});
