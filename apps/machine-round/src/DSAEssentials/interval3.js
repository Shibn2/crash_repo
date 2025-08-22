function insertInterval(intervals, newInterval) {
  const out = [];
  const n = intervals.length;
  let [start, end] = newInterval;

  let i = 0;
  // Add all the intervals which has ending coming before the new interval
  while (i < n && intervals[i][1] < start) {
    out.push(intervals[i]);
    i++;
  }

  // Merge all the overlapping intervals
  while (i < n && intervals[i][0] <= end) {
    start = Math.min(start, intervals[i][0]);
    end = Math.max(end, intervals[i][1]);
    i++;
  }
  out.push([start, end]);

  // append rest
  while (i < n) {
    out.push(intervals[i]);
    i++;
  }
  return out;
}

export default function insertIntervalUtil() {
  const intervals = [
    [1, 2],
    [3, 5],
    [6, 10],
    [11, 12],
    [13, 16],
  ];
  const newInterval = [8, 15];
  console.log(
    "Insert a new interval to the list of intervals",
    insertInterval(intervals, newInterval)
  );
}
