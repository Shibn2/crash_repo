function rotateImage(matrix) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  for (let r = 0; r < ROWS; r++) {
    for (let c = r + 1; c < COLS; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  for (let r = 0; r < ROWS; r++) {
    matrix[r] = matrix[r].reverse();
  }

  console.log("matrix", matrix);
  return matrix;
}

export function rotateImageUtil() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log("Rotate matrix to 90 deg", rotateImage(matrix));
}
