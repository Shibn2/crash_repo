function jumpGame(a) {
  let i = 0;
  let farthest = 0;
  while (i < a.length) {
    if (i > farthest) {
      return false;
    }
    farthest = Math.max(farthest, farthest + a[i]);
    i++;
  }
  if (farthest > a.length - 1) return true;
  return false;
}

function jumpGameUtility() {
  const arr = [2, 3, 1, 1, 4];
  console.log("jumpgame ---> ", jumpGame(arr));
  // const arr1 = [1, 2, 1, 1, 0, 4];
  // console.log("jumpgame ---> ", jumpGame(arr1));
}

export default jumpGameUtility;

// EXPLANATION AND ALGORITHM
// ✅ Greedy Algorithm – Idea
// At each index, track the farthest you can reach.
// If at any point the current index exceeds the farthest reachable index, then you cannot proceed, so return false.

// 🔍 Step-by-Step
// Initialize farthest = 0

// Iterate through the array (up to second-last index)

// At each step:

// If i > farthest, return false

// Update farthest = max(farthest, i + nums[i])

// After the loop, return true if farthest >= last index
