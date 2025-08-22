function productExceptSelf(nums) {
  let len = nums.length;
  let output = new Array(len).fill(null);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }
  return output;
}

export default function productExceptSelfUtil() {
  const nums = [1, 2, 4, 6];
  console.log(
    "Evaluate product except from self in the list",
    productExceptSelf(nums)
  );
}
