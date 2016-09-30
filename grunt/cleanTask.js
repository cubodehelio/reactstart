const config = require('../config.js');

module.exports = {

  /**
   * Drop the distribution folder. This task runs first when all the build
   * process start.
   *
   * Use: `grunt clean:public`
   */
  public: [`${config.dist}`]
};
