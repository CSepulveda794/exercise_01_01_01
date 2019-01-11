
// Exercise_01_01_01
//Date: 01.09.19
//Author: Cynthia Sepulveda

var fs = require('fs');

var data = fs.readdirSync("/");
console.log("data: ", data);

// fs.readdir('/', phonenumber);

console.log("this code is executed last");