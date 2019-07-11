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

let n11 = new ListNode(11),
    n21 = new ListNode(21),
    n31 = new ListNode(31),
    n41 = new ListNode(41),
    n51 = new ListNode(51);
n11.next = n21;
n21.next = n31;
n31.next = n41;
n41.next = n51;


let mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }
    let head = new ListNode(0),
        current = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next
    }
    if (l1 !== null) {
        current.next = l1
    }
    if (l2 !== null) {
        current.next = l2
    }
    return head.next
};

console.log(mergeTwoLists(n1, n11));
