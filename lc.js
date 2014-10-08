var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    var arr = data.split('\n'),
        lines = "" === arr[arr.length - 1] ? arr.length : arr.length - 1;
    console.log(lines);
});
