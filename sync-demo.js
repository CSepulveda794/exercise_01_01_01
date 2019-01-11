// Exercise_01_01_01
//Date: 01.09.19
//Author: Cynthia Sepulveda



var fs = require('fs'); //loading in file system

//calls me back when im done and throws it back after the readir 
fs.readdir('\/', function(err, data){
    console.log("data: ", data); //output our results
});

  


console.log("This code is executed last.");//checkiing to see when things execute