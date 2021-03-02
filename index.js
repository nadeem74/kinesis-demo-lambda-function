const fs = require('fs');

console.log('Loading function');

let rawdata = fs.readFileSync('./test-data.json');

exports.handler = function(event, context) {
    console.log('====================================');
    console.log(JSON.parse(rawdata));
    console.log('===================================='); 
};