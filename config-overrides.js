const { useBabelRc, override, addWebpackAlias } = require('customize-cra')


module.exports = override(
  useBabelRc(),
)