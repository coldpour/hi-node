var fs = require('fs'),
    dir = process.argv[2],
    ext = process.argv[3],
    endsWith = function (str, ss) {
        var li = str.lastIndexOf(ss);
        return li > 0 && str.length === li + ss.length;
    };

fs.readdir(dir, function (err, list) {
    for(var i=0, i_end=list.length; i<i_end; i++) {
        var file = list[i];
        if(endsWith(file, ext)) {
            console.log(file);
        }
    }
});
