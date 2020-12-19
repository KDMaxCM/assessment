exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  argsAsArray: (fn, arr) => fn.apply(null, arr),

  speak: (fn, obj) => fn.call(obj),

  functionFunction: (str) => (param) => str + ", " + param,

  makeClosures: (arr, fn) => arr.map((value) => () => fn(value)),

  partial: (fn, str1, str2) => (param) => fn(str1, str2, param),

  useArguments: (...args) => args.reduce((acc, sum) => acc + sum),

  callIt: (fn, ...args) => fn.apply(null, args),

  partialUsingArguments: (fn, ...args) => {},

  curryIt: function (fn) {},
};
