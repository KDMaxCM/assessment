exports = typeof window === "undefined" ? global : window;

exports.recursionAnswers = {
  listFiles: (data, dirName) => {
    const results = [];
    const recursiveFunction = (data) => {
      return data.files.map((item) => {
        if (item.files) {
          recursiveFunction(item);
        } else {
          if (dirName) {
            const dir = item.split(".");
            if (dir[1].toUpperCase() === dirName.toUpperCase())
              results.push(item);
          } else {
            results.push(item);
          }
        }
      });
    };
    recursiveFunction(data);

    return results;
  },

  permute: function (arr) {
    const permutateResult = [];
    const recursiveFunction = (arr, memo = []) => {
      if (arr.length === 0) {
        permutateResult.push(memo);
      } else {
        for (let i = 0; i < arr.length; i++) {
          const currentValue = arr.slice();
          const nextValue = currentValue.splice(i, 1);
          recursiveFunction(currentValue.slice(), memo.concat(nextValue));
        }
      }
    };
    recursiveFunction(arr);

    return permutateResult;
  },

  fibonacci: (n) => {
    const recursiveFunction = (n) => {
      if (n < 2) {
        return n;
      } else {
        return recursiveFunction(n - 1) + recursiveFunction(n - 2);
      }
    };
    return recursiveFunction(n);
  },

  validParentheses: function (n) {},
};
