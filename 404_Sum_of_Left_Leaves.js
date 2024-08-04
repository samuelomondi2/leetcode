
var sumOfLeftLeaves = function(root) {
    let totalLeftLeafValue = 0;
    const dfs = (root, left) =>  {
        if(root === null) return 0;
        
        if(root.left === null && root.right === null && left === true) {
            totalLeftLeafValue += root.val
        }

        dfs(root.left, true);
        dfs(root.right, false);
    }

    dfs(root, false)
    return totalLeftLeafValue
};