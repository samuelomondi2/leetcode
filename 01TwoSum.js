
// Brute force
var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length;i++){
        for(let j = 1; j<nums.length;j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))

// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum2 = function(nums, target) {
    const map = {};
    for(let i = 0; i<nums.length;i++){
        const compliment = target - nums[i];
        if(compliment in map){
            return [map[compliment], i];
        }
        map[nums[i]] = i;
    }
}

console.log(twoSum2([2,7,11,15], 9))
console.log(twoSum2([3,2,4], 6))

