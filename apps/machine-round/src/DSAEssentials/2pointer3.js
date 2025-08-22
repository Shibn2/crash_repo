function maxTrappedWater(walls) {
  let l = 0;
  let r = walls.length - 1;
  let maxArea = 0;

  while (l < r) {
    const height = Math.min(walls[l], walls[r]);
    const width = r - l;
    maxArea = Math.max(maxArea, height * width);

    if (walls[l] < walls[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
}

export default function maxTrappedWaterUtil() {
  console.log("1 Max trapped water --->", maxTrappedWater([1, 4, 2, 3])); // Output: 6
}
