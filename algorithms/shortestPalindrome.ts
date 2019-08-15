const shortestPalindrome = (pattern: string) => {
  const text = (
    pattern +
    pattern
      .split('')
      .reverse()
      .join('')
  ).split('');

  // KMP pi table
  let pi = [0];
  for (let idx = 1; idx < text.length; idx++) {
    let suffixLen = pi[idx - 1];

    while (suffixLen > 0) {
      if (text[suffixLen] === text[idx]) {
        if (suffixLen < pattern.length) {
          break;
        }
      }
      suffixLen = pi[suffixLen - 1];
    }
    pi.push(text[suffixLen] === text[idx] ? suffixLen + 1 : suffixLen);
    console.log({ pi });
  }

  return (
    pattern
      .slice(pi[pi.length - 1])
      .split('')
      .reverse()
      .join('') + pattern
  );
};

console.log(shortestPalindrome('abacd'));
