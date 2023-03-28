function print(n: number): void {
    if (n < 0) {
        return; // base case to stop recursion
    }
    console.log(n);
    print(n - 1); // recursive call with n-1
}

print(10);