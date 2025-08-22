function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0); // Safe guard dummy
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Step 1: Move fast n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Step 2: Move both fast and slow until fast.next is null
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Step 3: Remove the target node
  slow.next = slow.next.next;

  return dummy.next;
}

class ListNode {
  constructor(val, next = null) {
    this.val = val; // value of the current node
    this.next = next; // reference to the next node
  }
}

export default function removeNthFromEndUtil() {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  const n = 2;

  console.log(
    "remove 2nd element form the end head: ",
    head,
    "n",
    n,
    removeNthFromEnd
  );
}
