function myBind(fn, context) {
  return function () {
    return fn.apply(context, arguments);
  };
}

let obj = {
  type: "ball",
  color: "blue",
};

function describe(extraArg) {
  console.log(this.type, this.color, extraArg);
}

myBind(describe, obj)("apple");
