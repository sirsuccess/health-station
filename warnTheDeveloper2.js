function warnTheDeveloper(n, m, s) {
  //early return
  if (!n || !m || !s || s > n) {
    return 0;
  }

  let startCount = s;
  const dev = n;
  const sweet = m;
  let warn = 0;

  //sweet greater than dev
  if (sweet > dev) {
    let count = 0;
    for (let index = startCount; index <= dev; index++) {
      count++;
      if (index === dev && sweet > count) {
        index = 0;
      }
      warn = index - 1;
    }
  }

  //dev greater than sweet
  if (dev > sweet) {
    for (let index = startCount; index <= sweet; index++) {
      warn = index + startCount - 1;
    }
  }

  //dev equal to sweet
  if (dev === sweet) {
    if (startCount === 1) {
      return dev;
    }
    return startCount - 1;
  }

  return warn;
}

// console.log(warnTheDeveloper(4, 6, 2));
// console.log(warnTheDeveloper(5, 2, 1));
// console.log(warnTheDeveloper(5, 5, 1));
// console.log(warnTheDeveloper(5, 2, 2));
// console.log(warnTheDeveloper(7, 19, 2));
