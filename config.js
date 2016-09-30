
const src = 'demos/lifecycle/example';
const dist = '.dist';

module.exports = {
  src,
  dist,
  app: {

    /**
     * The location of the index.html for the app. It will be copied into the
     * distribution folder. See `grunt/copyTask.js`
     */
    'index.html': `${src}/index.html`,

    /**
     * The entry point for the webpack bundler.
     */
    'index.jsx': `${src}/app.jsx`,

    /**
     * css files that should be copied "as is" to the destination. See
     * `grunt/copyTask`
     */
    'styles': {
      sources: `${src}/css/**/*.css`,
      dest: `${dist}/css`
    }
  },

  /**
   * Where the webpack bundle file will be saved.
   */
  bundleName: `${dist}/bundle.js`,

  /**
   *  third party stuff
   */
  vendor: {

    styles: [/* TODO */],

    scripts: {

      /**
       * destination for third party script files
       */
      dest: `${dist}/vendor/js/`,

      /**
       * third party script sources. All this files will be copied to
       * `vendor.scripts.dest` folder.
       */
      sources: [
        'node_modules/react/dist/react.js',
        'node_modules/react/dist/react.min.js',
        'node_modules/react/dist/react-with-addons.js',
        'node_modules/react/dist/react-with-addons.min.js',
        'node_modules/react-dom/dist/react-dom.js',
        'node_modules/react-dom/dist/react-dom.min.js',
        'node_modules/remarkable/dist/remarkable.js',
        'node_modules/remarkable/dist/remarkable.min.js',
        'node_modules/superagent/superagent.js',
        'node_modules/debug/dist/debug.js',
        'node_modules/markdown-it/dist/markdown-it.js',
        'node_modules/markdown-it/dist/markdown-it.min.js',
        'node_modules/debug/browser.js'
      ]
    },

    fonts: [/* TODO */]
  },
  server: {
    port: 3003
  }
};
