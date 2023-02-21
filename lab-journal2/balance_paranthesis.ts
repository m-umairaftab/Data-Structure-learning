function peek (stack: any ){
    return stack[stack.length-1]
}
function isBalanced(str:any){
    let stack : any[] = []
    for (let i = 0; i < str.length; i++) {
        let letter : any = str.charAt(i)
        if (letter === '(') {
            stack.push(letter)
        }
        else if (letter === ')') {
            if (stack.length === 0) {
                return false
            }
            else if(peek(stack) === '('){
                stack.pop()
            }
            else{
                return false
                
            }
        }
    }
    return stack.length===0
}
const ts: any = require('fs')
ts.readFile('read_paranthesis.txt', 'utf-8', (err: any, paran: any) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(paran);
    
    console.log(isBalanced(paran))
    
})
// console.log(isBalanced("a+(b(c-d)"));
// console.log(isBalanced("a+(b(c-d)))"));
// console.log(isBalanced("a+)b(c-d)"));
// console.log(isBalanced("a+(b+c)-d("));