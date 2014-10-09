var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callback) {
  fs.readdir(dirname, function (err, list) {
    if (err) {
      return callback (err);
    }
    
    list = list.filter (function (file) {
      return path.extname(file) === "." + extension;
    });

    return callback (null, list);
  });
};
