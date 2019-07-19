function ListNode(val) {
    this.val = val;
    this.next = null;
}
let n1 = new ListNode(5),
    n2 = new ListNode(4),
    n3 = new ListNode(3),
    n4 = new ListNode(2),
    n5 = new ListNode(1);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let sortList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let low = head,
        fast = head.next;
    while (fast && fast.next) {
        low = low.next;
        fast = fast.next.next;
    }
    let left = head,
        right = low.next;
    low.next = null;
    return merge(sortList(left), sortList(right))
};

function merge(left, right) {
    if (!left) {
        return right
    }
    if (!right) {
        return left
    }
    let head = new ListNode(0),
        current = head;
    while (left && right) {
        if (left.val <= right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    if (left) {
        current.next = left;
    }
    if (right) {
        current.next = right;
    }
    return head.next
}

console.log(sortList(n1));