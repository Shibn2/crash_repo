function LinkedList(val) {
  this.value = val;
  this.next = null;
}

function reverseList(list) {
  let prev = null;
  let current = list;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function isPalindromeLinkedList(list) {
  let fast = list;
  let slow = list;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversedSecondHalf = reverseList(slow);
  let firstHalf = list;
  let isPalin = true;
  while (firstHalf.next && reversedSecondHalf.next) {
    if (firstHalf.value !== reversedSecondHalf.value) {
      isPalin = false;
      break;
    }
    firstHalf = firstHalf.next;
    reversedSecondHalf = reversedSecondHalf.next;
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
  console.log("Is palindrom linked list 2", isPalindromeLinkedList(l2));
}
