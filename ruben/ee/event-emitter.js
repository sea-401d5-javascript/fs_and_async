const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();

ee.on('file-read', (data)=> {
  console.log('Hi I\'m Ruben ' + data);
});

// ee.emit('custom-event', 'event string');

ee.on('file-read', (data) => {
  console.log('this is a', data.toString('hex', 0, 8));
})

fs.readFile('./test.txt', (err, data) => {
  console.log(data);
  ee.emit('file-read', data);
})
