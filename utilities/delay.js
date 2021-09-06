/**
 * Original Reference - https://lodash.com/docs/4.17.15#delay
 */
function delay(cb, timeout, ...rest) {
  let context = this;
  setTimeout(() => cb.apply(context, rest), timeout);
}

delay(
  function (text) {
    console.log(text);
  },
  1000,
  "later"
);

delay((a, b, c) => console.log(a + b + c), 1000, 1, 2, 3);
