class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  remove() {
    if (this.size() <= 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return min;
  }

  size() {
    return this.heap.length;
  }

  peak() {
    return this.heap.at(-1);
  }
  _bubbleUp() {
    let index = this.heap.length - 1;
    const current = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent <= current) break;

      this.heap[parentIndex] = current;
      this.heap[current] = parent;
      index = parentIndex;
    }
  }

  _bubbleDown() {
    let index = 0;
    const len = this.heap.length;
    let minimum = index;
    let current = this.heap[index];

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (left < len && this.heap[left] < current) {
        minimum = left;
      }
      if (right < len && this.heap[right] < current) {
        minimum = right;
      }

      if (index === minimum) break;

      this.heap[index] = this.heap[minimum];
      this.heap[minimum] = current;
      index = minimum;
    }
  }
}

function findKthLargest(arr, k) {
  const heap = new MinHeap();

  for (const num of arr) {
    heap.insert(num);
    if (heap.size() > k) {
      heap.remove();
    }
  }
  return heap.peak();
}

export default function topKElementsUtil() {
  console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
  console.log(findKthLargest([7, 10, 4, 3, 20, 15], 3)); // Output: 10
}
