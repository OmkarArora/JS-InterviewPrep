function allPromises(promises) {
  return new Promise((resolve, reject) => {
    try {
      let result = new Array(promises.length);
      let completedPromises = 0;
      promises.forEach(async (promise, index) => {
        let currentResult = await promise;
        result[index] = currentResult;
        completedPromises++;
        if (completedPromises === promises.length) resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
}
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

allPromises([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
