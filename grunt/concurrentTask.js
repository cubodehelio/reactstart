const areEnabled = require('./lib/areEnabledFilter');
const copyTask = require('./copyTask');

module.exports = {

  /**
   * list the copy tasks enabled to run concurrently.
   * See `./copyTask.js`.
   */
  copy: areEnabled(copyTask),

  /**
   * Run all the watchers concurrently. Watchers are "long running process"
   * that only ends when the user kill the grunt process. They are configured
   * to not exit on error so they can resume their job when the error is
   * solved.
   */
  'watch': ['run:webpack-watch', 'run:watch-app-index', 'run:lite-server'],
  'watch-no-serve': ['run:webpack-watch', 'run:watch-app-index'],
  options: {
    logConcurrentOutput: true
  }
};
