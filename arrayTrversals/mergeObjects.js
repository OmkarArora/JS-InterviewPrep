function mergeObjects(...rest) {
  return rest.reduce((acc, curr) => ({ ...acc, ...curr }));
}

console.log(
  mergeObjects(
    { app: 1, name: "Apple" },
    { ver: 2, fruit: false },
    { car: "rocket" }
  )
);
