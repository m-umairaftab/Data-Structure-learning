export { }
function evaluatePostfix(exp: any) {
    let stack: any[] = []
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i]
        if (!isNaN(parseInt(c))) {
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0))
        }
        else {
            let val1: any = stack.pop()
            let val2: any = stack.pop()
            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(val2 / val1);
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop()
}
const ts: any = require('fs')
ts.readFile('read_postfix_expression.txt', 'utf-8', (err: any, data: any) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
    console.log("postfix evaluation: ", evaluatePostfix(data));
})