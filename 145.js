
let postorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let result = [],
        stack = [],
        flag = [];
        temp = root;
    while (stack.length > 0 || temp) {
        while (temp) {
            stack.push(temp);
            flag.push(0);
            temp = temp.left
        }
        while (stack.length > 0 && flag[flag.length-1] === 1) {
            result.push(stack.pop().val);
            flag.pop()
        }
        if (stack.length > 0) {
            temp = stack[stack.length-1];
            flag[flag.length-1] = 1;
            temp = temp.right
        }
    }
    return result
};
