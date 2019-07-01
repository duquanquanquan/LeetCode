let nums = [-10,0,-2,3,-8,1,-10,8,-8,6,-7,0,-7,2,2,-5,-8,1,-4,6];

let threeSumClosest = function(nums, target) {
    if (nums.length < 3) {
        return
    }
    nums.sort((a, b) => a-b);
    let result = nums[0] + nums[1] + nums[2];
    let diff = Math.abs(target - result);
    for(let i = 0; i < nums.length - 2; i++){
        while (i > 0 && nums[i] === nums[i - 1]) {
            i++
        }
        let low = i + 1,
            high = nums.length - 1;
        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high];
            let newDiff = Math.abs(target - sum);
            if (newDiff < diff) {
                diff = newDiff;
                result = sum;
            }
            if (sum < target) {
                low++
            } else {
                high--
            }
        }
    }
    return result
};

console.log(threeSumClosest(nums, 18));
