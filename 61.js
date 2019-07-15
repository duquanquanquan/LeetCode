function ListNode(val) {
    this.val = val;
    this.next = null;
}

let n1 = new ListNode(15),
    n2 = new ListNode(25),
    n3 = new ListNode(35),
    n4 = new ListNode(45),
    n5 = new ListNode(55);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let rotateRight = function(head, k) {
    if (k === 0 || head === null || head.next === null) {
        return head
    }
    let len = 1,
        current = head;
    while (current.next !== null) {
        len++;
        current = current.next
    }
    if (k % len === 0) {
        return head
    } else {
        k = k % len;
    }
    let fast = head,
        low = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast.next !== null) {
        fast = fast.next;
        low = low.next;
    }
    let temp = low.next;
    low.next = null;
    fast.next = head;
    return temp
};

console.log(rotateRight(n1, 7));
