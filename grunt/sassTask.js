const config = require('../config.js');

module.exports = {

  options: {
    sourceMap: true
  },
  dist: {
    files: {
      'main.css': 'main.scss'
    }
  }
};
