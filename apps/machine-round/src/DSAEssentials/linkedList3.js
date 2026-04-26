class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(list) {
  let slow = list;
  let fast = list;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

export default function linkedListCycleUtil() {
  console.log(`Time & Space Complexity

Time Complexity:

O(n) → each pointer traverses at most n steps before detection.

Space Complexity:

O(1) → only two pointers used, no extra data structures.`);
  // Create linked list: 1 -> 2 -> 3 -> 4 -> null
  let n1 = new ListNode(1);
  let n2 = new ListNode(2);
  let n3 = new ListNode(3);
  let n4 = new ListNode(4);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;

  console.log(hasCycle(n1)); // Output: false
  // Create linked list: 1 -> 2 -> 3 -> 4 -> 2 (cycle)
  let m1 = new ListNode(1);
  let m2 = new ListNode(2);
  let m3 = new ListNode(3);
  let m4 = new ListNode(4);
  m1.next = m2;
  m2.next = m3;
  m3.next = m4;
  m4.next = m2; // cycle back to node 2

  console.log(hasCycle(m1)); // Output: true
}
