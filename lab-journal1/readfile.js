var fs = require('fs');
fs.readFile('test.js', 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
