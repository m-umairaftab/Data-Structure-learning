import { it } from "node:test"

const array : number[] = [1,4,10,12,15,20,22]
const keyVal : number = 5
let sumOfArray : number = 0
let total = array.forEach(sumOfKeyVal)
function sumOfKeyVal  (item:number){
    
    if (item % keyVal === 0) {
        console.log(item)
        return item
    }
}
