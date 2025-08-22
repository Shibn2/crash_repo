function matrixSpiral(matrix) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  let l = 0;
  let r = COLS - 1;
  let t = 0;
  let b = ROWS - 1;
  const out = [];
  while (l <= r && t <= b) {
    // Iterate through l->r row
    for (let col = l; col <= r; col++) {
      out.push(matrix[t][col]);
    }
    t++;
    // Iterate through the right column
    for (let row = t; row <= b; row++) {
      out.push(matrix[row][r]);
    }
    r--;
    // Iterate through the r->l row
    for (let col = r; col >= l; col--) {
      out.push(matrix[b][col]);
    }
    b--;
    // Iterate through the left column
    for (let row = b; row >= t; row--) {
      out.push(matrix[row][l]);
    }
    l++;
  }
  return out;
}

export default function matrixSpiralUtil() {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log("Matrix spiral --->", matrixSpiral(matrix));
}
