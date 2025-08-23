function mergeInterval(intervals) {
  const sortedIntervals = intervals.sort(
    (interval1, interval2) => interval1[0] < interval2[0]
  );

  console.log("sortedInterval", sortedIntervals);

  const mergedInterval = [sortedIntervals[0]];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const currInterval = sortedIntervals[i];
    const lastInterval = mergedInterval.at(-1);
    if (currInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], currInterval[1]);
    } else {
      mergedInterval.push(currInterval);
    }
  }
  return mergedInterval;
}

export function mergeIntervalUtil() {
  console.log(
    mergeInterval([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  );
}
