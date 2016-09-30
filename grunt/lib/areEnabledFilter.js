module.exports = function areEnabledFilter(tasks) {

  return Object.keys(tasks).
    filter((taskName) => {

      const disabled = tasks[taskName].disabled;

      if (typeof disabled !== 'undefined' && disabled === true) {
        return false;
      }

      return true;
    }).
    map((taskName) => `copy:${taskName}`);
};
