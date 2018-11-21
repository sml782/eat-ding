'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542808254544_3711';

  // add your config here
  config.middleware = [];

  config.customLogger = {
    scheduleLogger: {
      // consoleLevel: 'NONE',
      // file: path.join(appInfo.root, 'logs', appInfo.name, 'egg-schedule.log'),
    },
  };

  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    // maxAge: 31536000,
  };

  config.cluster = {
    listen: {
      port: 6001,
      // hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    },
  };

  return config;
};
