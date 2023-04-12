export{}
function display(arr: number[]): void {
    console.log(arr.join(" "));
}

function bubbleSort(arr: number[], n: number): void {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

const arr = [5, 3, 8, 4, 2];
const n = arr.length;

// Sort the array using bubble sort
bubbleSort(arr, n);
console.log("Bubble Sort:");
display(arr);