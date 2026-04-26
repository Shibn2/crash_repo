function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    const key = list[i];
    let j = i - 1;

    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = key;
  }
  return list;
}

export default function insertionSortUtil() {
  console.log(`🔹 Complexity Analysis
Time Complexity

Best Case (Sorted Input): O(n)
→ Only 1 comparison per iteration, no shifting.

Worst Case (Reverse Sorted Input): O(n²)
→ Each element has to be compared and shifted through the entire sorted portion.

Average Case: O(n²)
→ Roughly half of the elements need to be shifted for each insertion.

Space Complexity

O(1) (In-place)
→ Sorting is done by shifting elements within the array; no extra storage needed apart from the key.

✅ Summary Table

Case	Time Complexity	Space Complexity
Best Case	O(n)	O(1)
Average	O(n²)	O(1)
Worst Case	O(n²)	O(1)`);
  const arr = [100, 0, 2, 3, 4, 29, 87];
  console.log(
    "Sort the list based on insertion sort: [100, 0, 2, 3, 4, 29, 87]",
    insertionSort(arr)
  );
}
