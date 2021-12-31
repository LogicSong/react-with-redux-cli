const proxy = require('http-proxy-middleware');

// cra代理配置
module.exports = function (app) {
  app.use(
    proxy('/portal', {
      // target: 'http://localhost'
      target: 'http://172.21.17.142'
      // pathRewrite: { '^/api': '' }
    }),
    proxy('/speedtest', {
      // target: 'http://localhost'
      target: 'http://gx-speedtest.cmcdn.cdn.10086.cn'
      // pathRewrite: { '^/api': '' }
    })
  );
};
