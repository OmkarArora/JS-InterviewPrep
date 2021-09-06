//https://www.freecodecamp.org/news/javascript-debounce-example/
function debounce(fn, delay = 2000) {
  let timeout;
  return function () {
    let context = this;
    // console.log(context);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, arguments), delay);
  };
}

function logger(arg) {
  console.log(arg);
}
const debouncedLogger = debounce(logger, 5000);
debouncedLogger("yeahyeah");
