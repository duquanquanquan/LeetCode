
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let generateTrees = function(n) {
    if (n === 0) {
        return []
    }
    return getTrees(1, n);

    function getTrees (start, end) {

        if (start > end) {
            return [null];
        }

        if (start === end) {
            return [new TreeNode(start)];
        }

        let ret = [], left, right, node;

        for (let i = start; i <= end; i++) {
            left = getTrees(start, i-1);
            right = getTrees(i+1, end);
            for(let j = 0; j < left.length; j++){
                for(let k = 0; k < right.length; k++){
                    node = new TreeNode(i);
                    node.left = left[j];
                    node.right = right[k];
                    ret.push(node);
                    }
                }
        }
        return ret
    }

};
