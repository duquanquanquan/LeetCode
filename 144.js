function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let r1 = new TreeNode(1),
    r2 = new TreeNode(2),
    r3 = new TreeNode(3),
    r4 = new TreeNode(4),
    r5 = new TreeNode(5);
r1.left = r2;
r1.right = r3;
r2.right =r4;
r3.left = r5;

// 非递归
let preorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let result = [],
        stack = [],
        temp = root;
    while (stack.length > 0 || temp) {
        while (temp) {
            result.push(temp);
            stack.push(temp);
            temp = temp.left
        }
        temp = stack.pop();
        temp = temp.right
    }
    return result
};

let result = [];
let preorderTraversal1 = function(root) {
    if (root !== null) {
        result.push(root.val);
        if (root.left !== null) {
            preorderTraversal1(root.left)
        }
        if (root.right !== null) {
            preorderTraversal1(root.right)
        }
    }
};

preorderTraversal(r1);
