/**
 * @param {string[][]} grid
 * @param {string} target
 * @return {boolean}
 */
function findWordInGrid(grid, target) {
  const RIGHT_BOUND = grid[0].length;
  const BOTTOM_BOUND = grid.length;

  function dfsBacktracking(row, col, out = "", visit) {
    if (visit.has(`${row},${col}`)) {
      return;
    }
    if (out === target) {
      return true;
    }
    if (out.length > target.length) {
      return false;
    }
    console.log("out", out, "visit", visit);

    visit.add(`${row},${col}`);

    if (grid[row - 1] && grid[row - 1][col]) {
      if (dfsBacktracking(row - 1, col, out + grid[row - 1][col], visit)) {
        return true;
      }
    }
    if (grid[row + 1] && grid[row + 1][col]) {
      if (dfsBacktracking(row + 1, col, out + grid[row + 1][col], visit)) {
        return true;
      }
    }
    if (grid[row][col - 1]) {
      if (dfsBacktracking(row, col - 1, out + grid[row][col - 1], visit)) {
        return true;
      }
    }
    if (grid[row][col + 1]) {
      if (dfsBacktracking(row, col + 1, out + grid[row][col + 1], visit)) {
        return true;
      }
    }
    return false;
  }

  for (let r = 0; r < BOTTOM_BOUND; r++) {
    for (let c = 0; c < RIGHT_BOUND; c++) {
      if (grid[r][c] === target[0]) {
        const visit = new Set();
        if (dfsBacktracking(r, c, grid[r][c], visit)) {
          return true;
        }
      }
    }
  }
}

export default function findWordInGridUtil() {
  let grid = [
    ["a", "b", "c", "e"],
    ["s", "f", "c", "t"],
    ["a", "d", "e", "e"],
  ];
  let target = "tee";
  console.log("Find word in grid -> ", findWordInGrid(grid, target));
}
