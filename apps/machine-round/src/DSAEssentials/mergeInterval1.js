/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export default function mergeOverlappingIntervals(intervals) {
  const out = [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log("intervals-->", intervals);
  for (let i = 0; i < intervals.length; i++) {
    const lastInterval = out.at(-1) || [null, null];
    const interval = intervals[i];

    if (lastInterval[1] >= interval[0]) {
      out.pop();
      out.push([
        Math.min(lastInterval[0], interval[0]),
        Math.max(lastInterval[1], interval[1]),
      ]);
    } else {
      out.push(interval);
    }
  }
  return out;
}

export function mergeOverlappingIntervalsUtil() {
  const intervals = [
    [8, 8],
    [9, 10],
    [9, 9],
    [5, 7],
    [4, 5],
  ];
  console.log(mergeOverlappingIntervals(intervals));
}

//mergeOverlappingIntervals › intervals = [ [ 8, 8 ], [ 9, 10 ], [ 9, 9 ], [ 5, 7 ], [ 4, 5 ] ]
