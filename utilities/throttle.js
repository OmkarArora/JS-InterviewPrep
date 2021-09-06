function throttle(fn, delay) {
  let isTimerSet = false;
  const context = this;
  return function () {
    if (!isTimerSet) {
      fn.apply(context, arguments);
      setTimeout(() => {
        isTimerSet = false;
      }, delay);
      isTimerSet = true;
    }
  };
}

const logger = (arg) => console.log("logging...", arg);

let throttledLogger = throttle(logger, 10000);
throttledLogger("apple");
throttledLogger("apple");
throttledLogger("apple");
throttledLogger("apple");
throttledLogger("apple");
throttledLogger("apple");
setTimeout(() => throttledLogger("banana"), 11000);
