
var hasPathSum = function(root, targetSum) {
    const pathEquals = (root, calculatedSum) => {
        if(root === null) return 0;

        calculatedSum += root.val;

        if(root.left === null && root.right === null) return calculatedSum === targetSum;

        return pathEquals(root.left, calculatedSum) || pathEquals(root.right, calculatedSum)
    }
    return pathEquals(root, 0)
};