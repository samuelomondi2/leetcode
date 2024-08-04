
var pathSum = function(root, targetSum) {
    let results = []
    const recursivePathSum = (root, targetSumCount, targetSumArr) => {
        if(root === null) return [];

        targetSumCount += root.val;
        targetSumArr.push(root.val);

        if(root.left === null && root.right === null && targetSumCount === targetSum){
            results.push([...targetSumArr])
        }

        recursivePathSum(root.left, targetSumCount, targetSumArr)
        recursivePathSum(root.right, targetSumCount, targetSumArr)
        targetSumArr.pop()
    }
    recursivePathSum(root, 0, [])
    return results
};