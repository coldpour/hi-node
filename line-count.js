var fs = require('fs'),
    contents = fs.readFileSync(process.argv[2], 'utf8'),
    arr = contents.split('\n'),
    lines = "" === arr[arr.length - 1] ? arr.length : arr.length - 1;

console.log(lines);
