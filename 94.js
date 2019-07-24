var inorderTraversal = function(root) {
    if (root === null) {
        return []
    }
    let result = [],
        stack = [],
        temp = root;
    while (stack.length > 0 || temp !== null) {
        while (temp) {
            stack.push(temp);
            temp = temp.left
        }
        temp = stack.pop();
        result.push(temp.val);
        temp = temp.right
    }
    return result
};
