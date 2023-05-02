function multiplyArrays(arr1, arr2) {
    const result = new Array(arr1.length + arr2.length).fill(0);

    for (let i = arr1.length - 1; i >= 0; i--) {
        for (let j = arr2.length - 1; j >= 0; j--) {
            const product = arr1[i] * arr2[j];
            const p1 = i + j;
            const p2 = i + j + 1;
            const sum = product + result[p2];

            result[p1] += Math.floor(sum / 10);
            result[p2] = sum % 10;
        }
    }

    while (result[0] === 0 && result.length > 1) {
        result.shift();
    }

    return result;
}

const num1 = [5, 1, 2, 1];
const num2 = [2, 9, 0];

const result = multiplyArrays(num1, num2);
console.log(result.join(''));
