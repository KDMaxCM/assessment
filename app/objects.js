exports = typeof window === "undefined" ? global : window;

exports.objectsAnswers = {
  alterContext: (fn, obj) => fn.call(obj),
  alterObjects: (constructor, greeting) =>
    (constructor.prototype.greeting = greeting),
  iterate: (obj) =>
    Object.keys(obj).map((value) => {
      return value + ": " + obj[value];
    }),
};
