function maxArea(height) {
  let max = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const width = right - left;
    max = Math.max(max, h * width);

    // Move the shorter wall
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

export default function maxAreaUtil() {
  const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

  console.log(
    "Find the array with most water arr: ",
    arr,
    "area:",
    maxArea(arr)
  );
}
