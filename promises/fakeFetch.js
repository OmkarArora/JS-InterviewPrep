function fakeFetch(data, shouldReject = false, delay = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) reject(data);
      else resolve(data);
    }, delay);
  });
}

fakeFetch("resolve this")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
fakeFetch("reject this", true)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
