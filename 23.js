let swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let newHead = new ListNode(0),
        pre = newHead,
        current = head;
    while (current !== null && current.next !== null) {
        let node1 = current,
            node2 = node1.next;
        current = node2.next;
        pre.next = node2;
        node2.next = node1;
        node1.next = current;
        pre = pre.next.next
    }
    return newHead.next
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let n1 = new ListNode(1),
    n2 = new ListNode(2),
    n3 = new ListNode(3),
    n4 = new ListNode(4),
    n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(swapPairs(n1));
