const fs = require('fs');
const async = require('async');
exports = module.exports = {};

var textOne
var textTwo
var textThree

async.parallel([
    function(callback){
      fs.readFile('./one.txt',(err,data)=>{
        textOne = exports.textOne = data.toString('hex',0,8);
        callback();
      });
    },
    function(callback){
      fs.readFile('./two.txt',(err,data)=>{
        textTwo = exports.textTwo = data.toString('hex',0,8);
        callback();
      });
    },
    function(callback){
      fs.readFile('./three.txt',(err,data)=>{
        textThree = exports.textThree = data.toString('hex',0,8);
        callback();
      });
    }
], function () {
  console.log('one.txt hex: ' + textOne);
  console.log('two.txt hex: ' + textTwo);
  console.log('three.txt hex: ' + textThree);
});
