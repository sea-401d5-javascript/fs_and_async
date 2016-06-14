const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const ee = new EventEmitter();
module.exports = exports = {};
module.exports.results = [];

var reader = module.exports.reader = function (file, callback) {
  fs.readFile('./data/' + file + '.txt', (err, data) => {
    if (err) return console.log(err);
    var fileText = data.toString('hex', 0, 8);
    console.log(fileText);
    module.exports.results.push(fileText);
    debugger;
    ee.emit('file ' + file + ' read');
    if (callback == true && file == 'three') {
      callback();
    }
  })
}

ee.on('file one read', () => {
  reader('two');
})

ee.on('file two read', () => {
  reader('three');
})

reader('one');

debugger;
