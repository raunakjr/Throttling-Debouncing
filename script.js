let cnt = 0;
const getData = () => {
  console.log("fetching Data", cnt++);
};

const debounce = function (fn, d) {
  let timer;
  return function (...args) {
    clearInterval(timer);
    timer = setTimeout(() => {
      fn.apply(this, args); // this will insure that same fn is calling with same argumnet if it has
    }, d);
  };
};

const throttle = (fn, d) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, d);
    }
  };
};

// only make api calls when time diff bw two key press event >=3ms
// better to use when searching, clicking button multiple time and diff is there
const betterfunction = debounce(getData, 3000);

// call after delay of d second
// better to use in window resizing
const betterfunction2 = throttle(getData, 3000);
