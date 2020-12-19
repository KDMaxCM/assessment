exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  reduceString: (str, amount) => {
    let result = "",
      flagLetter = "";
    let count = 0;
    const arrayLetters = str.split("");

    arrayLetters.forEach((value) => {
      if (value !== flagLetter) count = 0;
      count++;
      flagLetter = value;
      if (count <= amount) result += value;
    });
    return result;
  },
  wordWrap: (str, cols) => {},
  reverseString: (str) => str.split("").reverse().join(""),
};
