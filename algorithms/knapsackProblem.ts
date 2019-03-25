/**
 * Input:
 * w: number[] - weights
 * v: number[] - values
 * c: number - capacity
 * n: number - amount of items
 *
 * Output:
 * maximum value that can be reached
 */

const knapsack = (w: number[], v: number[], n: number, c: number) => {
  let m = Array.from(Array(n + 1)).map(v =>
    Array.from(Array(c + 1)).map(() => 0)
  );

  Array.from(Array(n).keys())
    .map(i => i + 1)
    .forEach(i =>
      Array.from(Array(c + 1).keys()).forEach(j =>
        w[i - 1] > j
          ? (m[i][j] = m[i - 1][j])
          : (m[i][j] = Math.max(m[i - 1][j], m[i - 1][j - w[i - 1]] + v[i - 1]))
      )
    );

  return m[n][c];
};

console.log(knapsack([5, 3, 4, 2], [60, 50, 70, 30], 4, 5));
