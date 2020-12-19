exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.indexOf(item),
  sum: (arr) => arr.reduce((accum, current) => accum + current),
  remove: (arr, item) =>
    arr.filter((currentElement) => currentElement !== item),
  removeWithoutCopy: (arr, item) => {
    let itemReference = arr.indexOf(item);
    while (itemReference !== -1) {
      arr.splice(itemReference, 1);
      itemReference = arr.indexOf(item);
    }
    return arr;
  },

  append: (arr, item) => {
    arr.push(item);
    return arr;
  },

  truncate: (arr) => {
    arr.pop();
    return arr;
  },

  prepend: (arr, item) => {
    arr.unshift(item);
    return arr;
  },

  curtail: (arr) => {
    arr.shift();
    return arr;
  },

  concat: (arr1, arr2) => {
    return arr1.concat(arr2);
  },

  insert: (arr, item, index) => {
    arr.splice(index, 0, item);
    return arr;
  },

  count: (arr, item) =>
    arr.filter((currentElement) => currentElement === item).length,

  duplicates: (arr) => {
    const duplicatesValues = arr.filter(
      (currentElement, index) => arr.indexOf(currentElement) != index
    );
    return [...new Set(duplicatesValues)];
  },

  square: (arr) => arr.map((item) => Math.pow(item, 2)),

  findAllOccurrences: (arr, target) => {
    const occurrencesIndex = [];
    arr.forEach((item, index) => {
      if (item === target) {
        occurrencesIndex.push(index);
      }
    });
    return occurrencesIndex;
  },
};
