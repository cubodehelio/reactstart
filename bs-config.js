const config = require('./config');

module.exports = {
  port: config.server.port,
  files: `./${config.dist}/**/*.*`,
  server: { baseDir: `./${config.dist}` }
};
