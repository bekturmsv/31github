class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteDuplicates(head) {
  let current = head;
  while (current && current.next)
    current.val === current.next.val
      ? (current.next = current.next.next)
      : (current = current.next);
  return head;
}

const sortedList = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);
console.log("Original:", listToString(sortedList));
console.log("After:", listToString(deleteDuplicates(sortedList)));

function listToString(head) {
  return head ? `${head.val} -> ${listToString(head.next)}` : "null";
}
