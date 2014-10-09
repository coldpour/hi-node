var mymodule = require('./mymodule.js');
var dirname = process.argv[2];
var extension = process.argv[3];

mymodule(dirname, extension, function(err, data) {
  if (err) {
    return console.error ("something went wrong:", err);
  }
  data.forEach (function (file) {
    console.log (file);
  });
});

