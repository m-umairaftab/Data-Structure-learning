function sum(a: number[], size: number): number {
    if (size === 0) {
      return 0
    } else {
      return a[size - 1] + sum(a, size - 1)
    }
  }
  
  const arr: number[] = [1, 2, 3, 4]
  const result: number = sum(arr, 4)
  console.log(result)