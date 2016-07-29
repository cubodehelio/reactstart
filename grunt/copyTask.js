'use strict';
const sources = require('./sources');

module.exports = {
  'vendor.scripts': {
    src: sources.vendor.scripts,
    dest: 'server/public/vendor/js/',
    flatten: true,
    expand: true
  },
  'app.index': {
    src: sources.app.index,
    dest: 'server/public/',
    flatten: true,
    expand: true
  }
};
