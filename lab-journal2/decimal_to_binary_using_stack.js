var tscprompt = require('prompt-sync')();
var stack = [];
var currentSize = stack.length;
function push(newVal) {
    stack[currentSize] = newVal;
    currentSize += 1;
    // console.log(newVal);
}
var num = tscprompt('Enter the decimal number : ');
while (num !== 1) {
    var decimalToBinary = num % 2;
    stack.push(decimalToBinary);
    num /= 2;
    Math.trunc(num);
}
console.log(stack);
// const decimalToBinary : number  = Number(num).toString(2)
// stack.push(decimalToBinary)
// console.log(decimalToBinary);
