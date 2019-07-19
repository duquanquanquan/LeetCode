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

let insertionSortList = function(head) {
    if (head === null || head.next === null) {
        return head
    }
    let newHead = new ListNode(0),
        pre = head,
        current = pre.next;
    newHead.next = head;
    while (current) {
        let temp = newHead;
        let next = current.next;
        if (current.val < pre.val){
            while (temp.next.val < current.val) {
                temp = temp.next
            }
            current.next = temp.next;
            temp.next = current;
            pre.next = next;
            current = next;
        } else {
            current = current.next;
            pre = pre.next;
        }
    }
    return newHead.next
};

console.log(insertionSortList(n1));