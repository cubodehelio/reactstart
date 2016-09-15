const sources = require('./sources');

module.exports = {
  'vendor.scripts': {
    src: sources.vendor.scripts,
    dest: 'example/server/public/vendor/js/',
    flatten: true,
    expand: true
  },
  'app.index.html': {
    src: sources.app['index.html'],
    dest: 'example/server/public/',
    flatten: true,
    expand: true
  }
};
