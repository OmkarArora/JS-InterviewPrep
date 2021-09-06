function fakeFetch(data, shouldReject = false, delay = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(data);
      else resolve(data);
    }, delay);
  });
}

async function delayPromise(promise) {
  try {
    let result = await promise;
    return fakeFetch(result, false, 2000);
  } catch (error) {
    return fakeFetch(error, true, 2000);
  }
}

delayPromise(
  new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
  })
)
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
