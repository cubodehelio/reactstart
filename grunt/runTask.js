module.exports = {

  /**
   * Run `webpack` cli in the project root. The `webpack.config.js` file will
   * be used to configure webpack as a normal standalone webpack process.
   */
  'webpack': {
    cmd: 'webpack'
  },

  /**
   * Same as above but launch webpack with real time transpilaton enabled.
   */
  'webpack-watch': {
    options: {
      wait: true,
      failOnError: false
    },
    cmd: 'webpack',
    args: ['--watch', '--colors']
  },

  'watch-app-index': {
    options: {
      wait: true,
      failOnError: false
    },
    cmd: 'grunt',
    args: ['watch:app.index.html']
  },

  /**
   * Run `lite-server` to serve the files located in the public directory
   * of your app. This process will load the `bs-config.js` file to
   * configure the server.
   *
   * `wait` option is a delay in milliseconds. We need to wait for the build
   * task to finish and all the files to be served ready before launch the
   * `lite-server` process. Actually this is needed if you want the watch
   * feature to work properly because the files to be watched needs to be there
   * before the watcher start.
   */
  'lite-server': {
    options: {
      wait: true // use options.ready instead!
    },
    cmd: './node_modules/.bin/lite-server'
  }
};
