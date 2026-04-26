function minMeetingRooms(intervals) {
  const start = intervals.map(([s]) => s).sort((a, b) => a - b);
  const end = intervals.map(([_, e]) => e).sort((a, b) => a - b);

  let i = 0,
    j = 0;
  let used = 0,
    maxRooms = 0;

  while (i < start.length) {
    if (start[i] < end[j]) {
      used++;
      maxRooms = Math.max(maxRooms, used);
      i++;
    } else {
      used--;
      j++;
    }
  }
  return maxRooms;
}

export default function minMeetingRoomsUtil() {
  //   console.log(
  //     minMeetingRooms([
  //       [0, 30],
  //       [5, 10],
  //       [15, 20],
  //     ])
  //   ); // 2
  //   console.log(
  //     minMeetingRooms([
  //       [7, 10],
  //       [2, 4],
  //     ])
  //   ); // 1
  //   console.log(
  //     minMeetingRooms([
  //       [1, 5],
  //       [5, 10],
  //     ])
  //   ); // 1  (touching is OK)
  //   console.log(minMeetingRooms([])); // 0
  console.log(
    minMeetingRooms([
      [1, 10],
      [2, 7],
      [3, 19],
      [8, 12],
      [10, 20],
      [11, 30],
    ])
  ); // 4
}
