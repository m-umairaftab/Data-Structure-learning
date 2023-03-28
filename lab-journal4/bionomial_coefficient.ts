function binomialCoefficient(n: number, k: number): number {
    // base cases
    if (k == 0 || k == n) {
      return 1;
    } else if (k == 1 || k == n - 1) {
      return n;
    }
    
    // recursive case
    return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
  }
  
  console.log(binomialCoefficient(5, 2)); 
  console.log(binomialCoefficient(6, 3)); 
  