const contentt = "+'Next Time'"
const fss = require('fs')
fss.appendFile('test.js',contentt, err =>{
    if(err){
        console.error(err);
        return
    }
})