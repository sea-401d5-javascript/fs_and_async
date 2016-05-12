const fs = require('fs');

var fileText;

fs.readFile('./one.txt', (err, data) => {
  if (err) return console.log(err);
  fileText = data.toString('hex', 0, 16);
  console.log(fileText, 'first text file');

  //emit an event that says first file is done
})

//here we need to listen for the first file is done reading, then say second file is done
fs.readFile('./two.txt', (err, data) => {
  if (err) return console.log(err);
  fileText = data.toString('hex', 0, 16);
  console.log(fileText, 'second text file');
})

fs.readFile('./three.txt', (err, data) => {
  if (err) return console.log(err);
  fileText = data.toString('hex', 0, 16);
  console.log(fileText, 'third text file');
})
