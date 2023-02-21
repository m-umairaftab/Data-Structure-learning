var contentt = "+'Next Time'";
var fss = require('fs');
fss.appendFile('test.js', contentt, function (err) {
    if (err) {
        console.error(err);
        return;
    }
});
