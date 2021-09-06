// Q: write a function which takes a message and a delay and print that message after the delay.
function printWithDelay(msg, delay) {
  setTimeout(() => console.log(msg), delay);
}
// printWithDelay("apple", 2000);

// Q: write a function which takes a message and time. The function should print that message every X interval.
function printEveryInterval(msg, delay) {
  setInterval(() => console.log(msg), delay);
}
// printEveryInterval("banana", 2000);

// Q: Write a function which takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"
function countdown(number, delay) {
  let count = number;
  const interval = setInterval(() => {
    if (count === 0) {
      console.log("Bang Bang!");
      clearInterval(interval);
    } else {
      console.log(count);
      count--;
    }
  }, delay);
}
// countdown(5, 1000);

//let vs var in for loop timeout
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log("i: ", i), i * 1000);
}

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log("i: ", i), i * 1000);
// }
