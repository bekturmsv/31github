class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const addTwoNumbers = (l1, l2) => {
  const dummyHead = new ListNode(0);
  let current = dummyHead,
    carry = 0;

  while (l1 || l2 || carry) {
    const x = l1?.val || 0,
      y = l2?.val || 0,
      sum = x + y + carry;
    carry = Math.floor(sum / 10);
    current = current.next = new ListNode(sum % 10);
    (l1 = l1?.next), (l2 = l2?.next);
  }

  return dummyHead.next;
};

const l1 = new ListNode(3, new ListNode(4, new ListNode(2)));
const l2 = new ListNode(4, new ListNode(6, new ListNode(5)));
let result = addTwoNumbers(l1, l2);

while (result) console.log(result.val), (result = result.next);
