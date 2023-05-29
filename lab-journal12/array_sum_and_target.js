function twoSum(nums, target) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] === target) {
            return `${nums[i]}, ${nums[i + 1]}`;
            count++;
        }
    }

    if (count === 0)
        console.log("Target is not available in this array");

    return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 18;
const indices = twoSum(nums, target);
console.log(indices);  
