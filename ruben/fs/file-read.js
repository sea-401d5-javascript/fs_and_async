const fs = require('fs');

var fileText;

fs.readFile('./one.txt', (err, data) => {
  if (err) return console.log(err);
  fileText = data.toString();
  fs.writeFile('./two.txt', data);
})

var b = new Buffer ('RUBEN \n');

fs.writeFile('./three.txt', b);

debugger;
