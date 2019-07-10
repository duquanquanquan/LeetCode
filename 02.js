function ListNode(val) {
    this.val = val;
    this.next = null;
}

let addTwoNumbers = function(l1, l2) {

    let l = new ListNode(0),
        current = l,
        left = 0,
        sum = 0,
        temp = 0;

    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next
        }
        if (sum > 9) {
            sum = sum - 10;
            temp = 1
        }
        current.next = new ListNode(sum);
        current = current.next;
        sum = temp;
        temp = 0;
    }

    return l.next

};
