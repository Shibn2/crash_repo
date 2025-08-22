/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
function findInRotatedArray(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const val = numbers[mid];

    if (val === target) return mid;

    if (numbers[l] <= numbers[mid]) {
      if (target <= numbers[mid] && target >= numbers[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target <= numbers[r] && target >= numbers[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
}

export default function findInRotatedSortedArrayUtil() {
  // Input: numbers = [0,1,2,3,4], target = 2
  // Output: 2
  // Explanation: The original array [0,1,2,3,4] was rotated 0 times and 2 is present at 2nd index in given array
}
