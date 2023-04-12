function display(arr: number[]): void {
    console.log(arr.join(" "));
}

function selectionSort(arr: number[], n: number): void {
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
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

function insertionSort(arr: number[], n: number): void {
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
const arr = [5, 3, 8, 4, 2];
const n = arr.length;

// Sort the array using selection sort
selectionSort(arr, n);
console.log("Selection Sort:");
display(arr);

// Sort the array using bubble sort
bubbleSort(arr, n);
console.log("Bubble Sort:");
display(arr);

// Sort the array using insertion sort
insertionSort(arr, n);
console.log("Insertion Sort:");
display(arr);
