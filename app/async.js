exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
  async: (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(value);
      }, 100);
    });
  },

  manipulateRemoteData: (url) => {
    const deferred = $.Deferred();
    $.ajax(url).then(({ people }) => {
      const peopleSort = people.map((person) => person.name).sort();
      deferred.resolve(peopleSort);
    });
    return deferred.promise();
  },
};
