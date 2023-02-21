const content = "'better Luck'"
const fs = require('fs')
fs.writeFile('test.js',content, err =>{
    if(err){
        console.error(err);
        return
    }
})