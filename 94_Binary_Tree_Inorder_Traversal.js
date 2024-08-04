
var inorderTraversal = function(root) {
    results = [];
    const recursiveInorderTraversalFunc = (root) => {
        if(root != null){
            recursiveInorderTraversalFunc(root.left)
            results.push(root.val)
            recursiveInorderTraversalFunc(root.right)
        } else return null;
    }
    recursiveInorderTraversalFunc(root);
    return results;
};

// https://www.youtube.com/watch?v=SjwK3CZPuqA