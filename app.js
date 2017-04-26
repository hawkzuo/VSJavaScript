'use strict';

console.log('Starting App...');
// require <=> include/ import
// import 'filesystem'
const fs = require('fs');
const os = require('os')

var user = os.userInfo();
/*
fs.appendFile('File1.txt', 'Data buffer contents', function (err) {
    if (err) {
        console.log('File writting failed.')
    }
});
*/
console.log(user)
//  ${user.username};


