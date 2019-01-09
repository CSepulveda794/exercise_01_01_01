// Exercise_01_01_01
//Date: 01.09.19
//Author: Cynthia Sepulveda



var fs = require('fs'); //loading in file system
var data = fs.readdirSync('\/'); //holds what we read from the file system, its reading directly from our home directory

console.log("data: ", data); //output our results
console.log("This code is executed last.");//checkiing to see when things execute