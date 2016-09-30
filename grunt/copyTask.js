const config = require('../config');

module.exports = {

  /**
   * Copy the `index.html` to the distribution folder.
   * Use: `grunt copy:app.index.html`
   */
  'app.index.html': {
    src: config.app['index.html'],
    dest: config.dist,
    flatten: true,
    expand: true
  },

  /**
   * copy the css files owned by your app to the desired destination.
   */
  'app.styles': {
    src: config.app.styles.sources,
    dest: config.app.styles.dest,
    flatten: true,
    expand: true
  },

  /**
   * Copy third party scripts to the distribution folder.
   * Use: `grunt copy:vendor.scripts`
   */
  'vendor.scripts': {
    src: config.vendor.scripts.sources,
    dest: config.vendor.scripts.dest,
    flatten: true,
    expand: true
  }
};
