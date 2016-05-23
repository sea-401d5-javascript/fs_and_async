
const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const ee = new EventEmitter();
files = ['./one.txt', './two.txt', './three.txt'];
output = {};
logger = ""

ee.on('check-and-log', (data) => {
  if (Object.keys(output).length == files.length) {
    for (i = 1; i < Object.keys(output).length + 1; i++) {
      logger = logger + output[i].slice(0, 8).toString('hex') + "\n"

    }
console.log(logger);
  }
})

readfile = function (file, order) {
  fs.readFile(file, (err, data) => {
    if (err) return console.log(err);
    output[order] = data;
    ee.emit('check-and-log');
  })
}

loadfiles = function (f) {
  count = 0;
  f.map(function (f) {
    count++;
    readfile(f, count);
  })
}

loadfiles(files);
