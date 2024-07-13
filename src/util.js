export const getValidFilters = (filters) => {
  const validFilters = {};
  for (const key in filters) {
    if (Object.hasOwnProperty.call(filters, key) && filters[key]) {
      validFilters[key] = filters[key];
    }
  }

  return validFilters;
};


export const debounce = (fn, msec) => {
  let lastCall = 0;
  let lastCallTimer = 0;

  let count = 0;
  let countDebounced = 0;
  
  return (...arg) => {
    const prevCall = lastCall;
    lastCall = Date.now();
    console.log('countDebounced: ', ++countDebounced);

    if (prevCall && lastCall - prevCall <= msec) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => {
      console.log(`count in lastCall`, ++count, '\n');
      fn(...arg);
    }, msec);
  };
};


/** test summ */
const summ = (a = 0, b = 0) => {
  console.log('a + b: ', a, '+', b, '==', a + b);
  return (a + b);
}

/** debounced summ */
const sumDeb = debounce(summ, 500)


/** tests */
setTimeout(() => {
  console.log('summ(2, 4): ', sumDeb(1, 2));
}, 1000);
setTimeout(() => {
  console.log('summ(500, 600): ', sumDeb(500, 600));
}, 2100);
setTimeout(() => {
  console.log('summ(5, 6): ', sumDeb(5, 6));
}, 1100);
console.log('summ(1, 2): ', sumDeb(1, 2));
console.log('summ(10, 25): ', sumDeb(10, 25));
console.log('summ(1000, 1234): ', sumDeb(1000, 1234));



