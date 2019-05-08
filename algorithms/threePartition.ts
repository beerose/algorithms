/**
 *
 * Consider an array A of n integers.
 * Determine if array A can be split into three consecutive parts
 * such that sum of each part is equal.
 *
 * Sum of A can be divided by 3.
 */

const partition = (a: number[]) => {
  const n = a.length;

  const sum = a.reduce((acc, curr) => acc + curr, 0);

  let result = Array.from(Array(sum + 1)).map(v =>
    Array.from(Array(sum + 1)).map(() => false)
  );

  result[0][0] = true;
  for (let k = 0; k < n; k++) {
    for (let p = sum; p >= 0; p--) {
      for (let r = sum; r >= 0; r--) {
        if (result[p][r]) {
          result[p + a[k]][r] = true;
          result[p][r + a[k]] = true;
        }
      }
    }
  }

  return result[sum / 3][sum / 3];
};

console.log(partition([1, 3, 4, 0, 4]));
console.log(partition([2, 1, 1, 2]));
console.log(partition([2, 3, 4]));
