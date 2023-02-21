const ts:any = require('fs')
ts.readFile('test.js', 'utf-8', (err, data) =>{
    if(err){
        console.error(err)
        return
    }
    console.log(data)
})