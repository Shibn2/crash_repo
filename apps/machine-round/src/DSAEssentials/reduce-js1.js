// group anagrams

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

function groupAnagrams(arr) {
  const outList = [];
  const res = arr.reduce((acc, curr) => {
    const str = curr.split("").sort().join("");
    if (!(str in acc)) {
      acc[str] = [];
    }
    acc[str].push(curr);
    return acc;
  }, {});
  console.log("res--->", res);
  return Object.values(res);
}

function groupANagramUtil() {
  //     Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
  // Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
  const a1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
  console.log(">>> Group anagrams utility:", groupAnagrams(a1));
}

export default groupANagramUtil;
