var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = arr.reduce(function (previousVal, currentVal) {
    return previousVal + currentVal;
}, 0);
console.log("Sum is ", sum);
var avg = sum / 10;
console.log("Average is ", avg);
var max = Math.max.apply(Math, arr);
console.log("Maximum number is ", max);
var min = Math.min.apply(Math, arr);
console.log("Minimum number is ", min);
