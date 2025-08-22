function searchRange(nums, target) {
  function findBound(isFirst) {
    let left = 0,
      right = nums.length - 1,
      bound = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          right = mid - 1; // search left
        } else {
          left = mid + 1; // search right
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return bound;
  }

  return [findBound(true), findBound(false)];
}

export default function findFirstAndLastPositionOfElementUtil() {
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 8;

  console.log(
    "Find first and last occurance of an element:",
    searchRange(nums, target)
  );
}
