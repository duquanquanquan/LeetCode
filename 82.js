function ListNode(val) {
    this.val = val;
    this.next = null;
}

let n1 = new ListNode(1),
    n2 = new ListNode(2),
    n3 = new ListNode(3),
    n4 = new ListNode(3),
    n5 = new ListNode(4),
    n6 = new ListNode(4),
    n7 = new ListNode(5);


n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

let deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head
    }
    let newHead = new ListNode(0),
        current = head,
        temp = newHead;
    while (current && current.next) {

        if (current.val !== current.next.val) {
            temp.next = current;
            temp =temp.next;
        } else {
            while (current && current.next && current.val === current.next.val) {
                current = current.next
            }
        }
        current = current.next
    }

    temp.next = current;

    return newHead.next
};

console.log(deleteDuplicates(n1));
