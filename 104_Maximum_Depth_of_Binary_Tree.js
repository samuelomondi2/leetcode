
// DFS
var maxDepth = function(root) {
    if(root === null) return 0;
    return 1+Math.max(maxDepth(root.left), maxDepth(root.right));
};

// BFS
var maxDepth = function(root) {
    if(root === null) return 0;
    let queue = [ root ];
    let maxDepthCount = 0;
    while(queue > 0){
        for(let i = 0; i<queue.length;i++){
            let current = queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        maxDepthCount++;
    }
    return maxDepthCount;
};