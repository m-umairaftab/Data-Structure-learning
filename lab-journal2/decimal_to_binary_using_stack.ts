const tscprompt = require('prompt-sync')()
let stack : number[] =[]
let currentSize : number = stack.length
function push (newVal:number){
    stack[currentSize]=newVal
    currentSize+=1
}
let num : number = tscprompt('Enter the decimal number : ')
while (num !== 1) {
    let decimalToBinary : number = num%2
    stack.push(decimalToBinary)
    num/=2
    num = Math.trunc(num)
    
}
console.log(stack)


