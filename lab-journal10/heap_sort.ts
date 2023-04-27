export{}
function heapSort(array: number[]): number[] {
    // Build max heap
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    // Heap sort
    // for (let i = array.length - 1; i > 0; i--) {
    //     // Move root to end
    //     [array[0], array[i]] = [array[i], array[0]];
    //     // Heapify reduced heap
    //     heapify(array, i, 0);
    // }

    return array;
}

function heapify(array: number[], n: number, i: number): void {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child

    // If left child is larger than root
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];

        // Recursively heapify the affected sub-tree
        heapify(array, n, largest);
    }
}

(function test() {
    const arr = [4, 2, 1, 3, 5, 6];
    console.log(heapSort(arr));
})();
