function LinkedList(val) {
  this.value = val;
  this.next = null;
}

function reverseList(list) {
  let prev = null;
  let curr = list;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function isPalindromeLinkedList(list) {
  let fast = list;
  let slow = list;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let reversedSecHalf = reverseList(slow);
  let firstHalf = list;
  let isPalin = true;

  while (reversedSecHalf.next && firstHalf.next) {
    if (reversedSecHalf.value !== firstHalf.value) {
      isPalin = false;
      break;
    }
    firstHalf = firstHalf.next;
    reversedSecHalf = reversedSecHalf.next;
  }
  return isPalin;
}

export default function isPalindromeLinkedListUtil() {
  const l1 = new LinkedList(1);
  l1.next = new LinkedList(2);
  l1.next.next = new LinkedList(3);
  l1.next.next.next = new LinkedList(2);
  l1.next.next.next.next = new LinkedList(1);

  const l2 = new LinkedList(1);
  l2.next = new LinkedList(2);
  l2.next.next = new LinkedList(3);
  l2.next.next.next = new LinkedList(4);
  l2.next.next.next.next = new LinkedList(1);

  console.log("Is palindrom linked list", isPalindromeLinkedList(l1));
  // console.log("Is palindrom linked list 2", isPalindromeLinkedList(l2));
}
