function ListNode(val) {
    this.val = val;
    this.next = null;
}

let n1 = new ListNode(15),
    n2 = new ListNode(25),
    n3 = new ListNode(25),
    n4 = new ListNode(45),
    n5 = new ListNode(55);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head
    }
    let pre = head,
        current = head;
    while (current) {
        while (current && current.next && current.val === current.next.val) {
            current = current.next
        }
        current = current.next;
        pre.next = current;
        pre = current;
    }
    return head
};

console.log(deleteDuplicates(n1));
