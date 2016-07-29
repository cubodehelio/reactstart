'use strict';
const copyTasks = require('./grunt/copyTask');
const cleanTasks = require('./grunt/cleanTask');

module.exports = function (grunt) {

  grunt.registerTask('default', ['run:webpack', 'copy']);
  grunt.registerTask('develop', ['clean:public', 'concurrent:develop']);
  grunt.registerTask('webpack', ['run:webpack']);

  grunt.initConfig({
    clean: cleanTasks,
    copy: copyTasks,

    /**
     * configure `grunt-run` task
     */
    run: {
      'options': {
        wait: true
      },
      'webpack': {
        cmd: 'webpack'
      },
      'webpack-watch': {
        cmd: 'webpack',
        args: ['--watch', '--colors']
      }
    },

    concurrent: {
      develop: {
        tasks: ['copy:vendor.scripts', 'copy:app.index', 'run:webpack-watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-concurrent');
};
