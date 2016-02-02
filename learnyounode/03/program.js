var fs = require('fs');
var buf = fs.readFileSync(process.argv[2], 'utf8');
var arr = buf.split("\n");
console.log(arr.length-1);
