function dfs(row, col, grid, ROW_LIMIT, COL_LIMIT) {
  if (
    row < 0 ||
    col < 0 ||
    row >= ROW_LIMIT ||
    col >= COL_LIMIT ||
    grid[row][col] === "0"
  ) {
    return;
  }
  grid[row][col] = "0";
  dfs(row + 1, col, grid, ROW_LIMIT, COL_LIMIT);
  dfs(row - 1, col, grid, ROW_LIMIT, COL_LIMIT);
  dfs(row, col + 1, grid, ROW_LIMIT, COL_LIMIT);
  dfs(row, col - 1, grid, ROW_LIMIT, COL_LIMIT);
  return;
}

function numOfIslands(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  let islandCount = 0;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === "1") {
        islandCount++;
        dfs(r, c, grid, ROWS, COLS);
      }
    }
  }
  return islandCount;
}

export default function numOfIslandsUtil() {
  const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];

  console.log("Number of islands: ", numOfIslands(grid));
}
