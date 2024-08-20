
// var rotate = function(nums, k) {
//     for(let i = 0; i<k; i++){
//         let j = nums.pop();
//         nums.unshift(j);
//     }
//     return nums;
// };

// PS...error occurs on a large value ie k=54944

var rotate = function(nums, k) {
    let reversedNums = nums.reverse()
    let rotatedArray = [].concat(reversedNums.slice(0, k).reverse(), reversedNums.slice(k).reverse())
    return rotatedArray;
};

console.log(rotate([1,2,3,4,5,6,7], 3))