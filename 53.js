let nums = [-2,1,-3,4,-1,2,1,-5,4];

/*let maxSubArray = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }
    let result = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        result[i] = Math.max(result[i-1]+nums[i], nums[i])
    }
    return Math.max(...result)
};*/

let maxSubArray = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }
    let maxSum = nums[0],
        preSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        preSum = Math.max(preSum + nums[i], nums[i]);
        maxSum = Math.max(preSum, maxSum)
    }
    return maxSum
};

console.log(maxSubArray(nums));
