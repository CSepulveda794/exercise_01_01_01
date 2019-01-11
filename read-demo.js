// Exercise_01_01_01
//Date: 01.11.19
//Author: Cynthia Sepulveda


var fs = require('fs'); // we have to require because its a core module

fs.readFile('./data1.json', function(err, data){
    console.log(data);
});