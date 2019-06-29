/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.*/

const twoSum = function(nums, target) {
    let map = new Map();
    let result = [];
    nums.forEach((value, index) => {
        let diff = target - value;
        if (diff in map) {
            result = [map[diff], index]
        }
        map[value] = index
    });
    return result
};
