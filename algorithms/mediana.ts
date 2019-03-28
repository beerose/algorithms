const findMedian = (S: number[]): number => {
  const n = S.length;
  const n34 = Math.pow(n, Math.ceil(3 / 4));

  let R: number[] = [];
  for (let i = 0; i <= n34; i++) {
    R.push(S[Math.floor(Math.random() * S.length)]);
  }
  R.sort();

  const d = R[Math.ceil((1 / 2) * n34 - Math.sqrt(n))];
  const u = R[Math.ceil((1 / 2) * n34 + Math.sqrt(n))];

  const C = S.filter(x => x >= d && x <= u);
  if (C.length > 4 * n34) {
    throw Error('C is too big');
  }
  C.sort();

  const ld = Array.from(S).reduce(
    (acc, current) => (current < d ? acc + 1 : acc),
    0
  );
  const lu = Array.from(S).reduce(
    (acc, current) => (current > u ? acc + 1 : acc),
    0
  );

  if (ld > n / 2 || lu > n / 2) {
    throw Error('ld or lu too big');
  }

  return C[Math.floor(n / 2) - ld + (C.length % 2 === 1 ? 1 : 0)];
};

const generateTests = (n: number, size: number): Set<number>[] => {
  let tests: Set<number>[] = [];
  for (let i = 0; i < n; i++) {
    let test: number[] = [];
    for (let j = 0; j < size; j++) {
      test.push(Math.floor(Math.random() * size));
    }
    tests.push(new Set(test));
  }
  return tests;
};

const tests = generateTests(100, Math.pow(10, 4));
tests.map(test => {
  try {
    const median = findMedian(Array.from(test));
    console.log(median);
  } catch (err) {
    console.log('FAIL: ' + err);
  }
});
