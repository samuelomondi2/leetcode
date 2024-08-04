
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        const middle = Math.floor((left+right) / 2);
        if(nums[middle] === target){
            return middle;
        }
        else if(nums[middle] < target){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
};


console.log(search([-1, 0, 3, 5, 9 ,12], 2))
console.log(search([-1, 0, 3, 5, 9 ,12], 9))
console.log(search([5], 5))
console.log(search([5], -5))