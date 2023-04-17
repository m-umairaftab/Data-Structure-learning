// export{}
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const left  = [];
    const right = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      
      else if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    
    return quickSort(left).concat([pivot], quickSort(right));
  }
  
  const arr = [4, 2, 1, 3, 5, 6];
  const sortedArr = quickSort(arr);
  console.log(sortedArr); // [1, 2, 3, 4, 5, 6]
  