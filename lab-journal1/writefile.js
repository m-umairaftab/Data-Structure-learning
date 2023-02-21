var content = "'better Luck'";
var fs = require('fs');
fs.writeFile('test.js', content, function (err) {
    if (err) {
        console.error(err);
        return;
    }
});
