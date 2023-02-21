export { }
class Stack {
    size;
    top;
    a: any = [];
    constructor(n:any) {
        this.top = -1;
        this.size = n;
        this.a = new Array(this.size);
    }
    push(x:any) {
        if (this.top >= this.size) {
            console.log("Stack Overflow<br>");
            return false;
        }
        else {
            this.a[++this.top] = x;
            return true;
        }
    }
    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow<br>");
            return 0;
        }
        else {
            let x = this.a[this.top--];
            return x;
        }
    }
}
function reverse(str: any) {

    let n = str.length;
    let obj = new Stack(n);
    for (let i = 0; i < n; i++)
        obj.push(str[i]);

    for (let i = 0; i < n; i++) {
        let ch = obj.pop();
        str[i] = ch;
    }
}
const ts: any = require('fs')
ts.readFile('read_file.txt', 'utf-8', (err: any, data: any) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
    let s :any = data.split("")
    reverse(s)
    console.log("Reversed string is " +
                s.join(""))

    ts.writeFile('write_file.txt', s.toString(), function (err: any) {
        if (err) {
            console.error(err);
            return;
        }
    });

})


