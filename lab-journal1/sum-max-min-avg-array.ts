const arr : number[] =[1,2,3,4,5,6,7,8,9,10]
const sum : number =arr.reduce(function(previousVal, currentVal){
  return previousVal + currentVal
},0)
console.log("Sum is ",sum);
const avg : number = sum/10
console.log("Average is ",avg);
const max : number = Math.max(...arr)
console.log("Maximum number is ", max);
const min : number = Math.min(...arr)
console.log("Minimum number is ", min);
