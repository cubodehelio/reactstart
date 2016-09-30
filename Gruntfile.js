const run = require('./grunt/runTask');
const copy = require('./grunt/copyTask');
const sass = require('./grunt/sassTask');
const clean = require('./grunt/cleanTask');
const concurrent = require('./grunt/concurrentTask');
const watch = require('./grunt/watchTask');

module.exports = (grunt) => {

  grunt.registerTask('default', [
    'clean:public',
    'concurrent:copy',
    'concurrent:watch',
  ]);

  grunt.registerTask('noserve', [
    'clean:public',
    'concurrent:copy',
    'concurrent:watch-no-serve'
  ]);

  grunt.initConfig({

    /**
     * Configure the clean task.
     * See `grunt/cleanTask.js` file.
     */
    clean,

    /**
     * Configure all the stuff that will be copied "as is" to the distribution
     * folder.
     */
    copy,

    /**
     * Configure the node-sass task
     */
    sass,

    /**
     * Configure `grunt-run` tasks...
     */
    run,

    /**
     * Configure `grunt-concurrent` (tasks that can run asynchronously at the
     * same time).
     */
    concurrent,
    watch
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
