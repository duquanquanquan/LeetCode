let removeNthFromEnd = function(head, n) {

    if (head === null) {
        return null
    }

    let current = head,
        len = 0;
    while (current) {
        len ++;
        current = current.next;
    }

    if (n < 1 || n > len) {
        return head
    }

    if (n === len) {
        return head.next
    }

    current = head;
    while (len > n+1) {
        len --;
        current = current.next;
    }

    let pre = current;
    current = current.next;
    if (current) {
        pre.next = current.next
    } else {
        pre.next = null
    }

    return head
};
