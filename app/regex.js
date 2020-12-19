exports = typeof window === "undefined" ? global : window;

exports.regexAnswers = {
  containsNumber: (str) => new RegExp(/\d+/).test(str),

  containsRepeatingLetter: (str) => new RegExp(/([a-zA-Z]).*?\1/).test(str),

  endsWithVowel: (str) => new RegExp(/[aeiou]$/i).test(str),

  captureThreeNumbers: (str) => {
    const hasMatch = new RegExp(/\d{3}/).exec(str);
    return hasMatch ? hasMatch[0] : false;
  },

  matchesPattern: (str) => new RegExp(/^\d{3}\-\d{3}\-\d{4}$/).test(str),

  isUSD: (str) => new RegExp("").test(str),
};
