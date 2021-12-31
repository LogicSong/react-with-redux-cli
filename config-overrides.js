const {
  override,
  addLessLoader,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackPlugin,
  useBabelRc,
  addWebpackAlias,
  fixBabelImports
} = require('customize-cra');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
// process.env.GENERATE_SOURCEMAP = 'false';
module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  //按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es/components',
    style: false
  }),
  addLessLoader({
    javascriptEnabled: true,
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]'
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  }),
  useBabelRc(),
  process.env.NODE_ENV === 'production' &&
    addWebpackPlugin(
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true
          }
        }
      })
    )
);
