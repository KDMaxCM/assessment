exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
  count: (start, end) => {
    let _timeOut = null;

    const executeTimeOut = () => {
      console.log(start++);
      if (start <= end) _timeOut = setTimeout(executeTimeOut, 100);
    };
    executeTimeOut();

    return {
      cancel: () => clearTimeout(_timeOut),
    };
  },
};
