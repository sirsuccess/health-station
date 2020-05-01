//optimize solution

function warnTheDeveloper(n, m, s) {
  //early return
  if (!n || !m || !s || s > n) {
    return 0;
  }

  //when developer is equal to sweet and chair = 1
  if (m === n && s === 1) {
    return n;
  }

  const leftover = m % n;
  const warn = s + leftover - 1;
  return warn;
}

// console.log(warnTheDeveloper(4, 6, 2));
// console.log(warnTheDeveloper(5, 2, 1));
// console.log(warnTheDeveloper(5, 5, 1));
// console.log(warnTheDeveloper(5, 2, 2));
// console.log(warnTheDeveloper(7, 19, 2));
