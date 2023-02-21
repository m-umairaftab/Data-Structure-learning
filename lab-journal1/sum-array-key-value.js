"use strict";
exports.__esModule = true;
var array = [1, 4, 10, 12, 15, 20, 22];
var keyVal = 5;
var sumOfArray = 0;
var total = array.forEach(sumOfKeyVal);
function sumOfKeyVal(item) {
    if (item % keyVal === 0) {
        console.log(item);
        return item;
    }
}
