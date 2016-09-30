const config = require('../config.js');

module.exports = {
  'app.index.html': {
    files: config.app['index.html'],
    tasks: 'copy:app.index.html',
    options: {
      spawn: false,
    },
  },
};
