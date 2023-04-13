import { log } from "console";
export { }
function display(arr: number[]): void {
    console.log(arr.join(" "));
}
function shellSort(arr: number[]): void {
    const n = arr.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

}
const arr: number[] = [4, 2, 1, 3, 5, 6]
shellSort(arr);
console.log("shell Sort:");
display(arr);