exports = typeof window === "undefined" ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {},

  base10: (str) => parseInt(str, 2),

  convertToBinary: (num) => {
    const binary = Number(num).toString(2);
    if (binary.length === 8) return binary;
    let pendingValues = 8 - binary.length;
    let pending = "";
    for (let index = 0; index < pendingValues; index++) {
      pending += "0";
    }
    return pending + binary;
  },

  multiply: (a, b) => {
    const numbersOfDecimal = parseInt(String(b).split(".")[1].length);

    return parseFloat((a * b).toFixed(numbersOfDecimal));
  },
};
