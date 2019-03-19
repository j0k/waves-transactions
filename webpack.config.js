const path = require('path');

module.exports = {
  entry: './dist/index.js',
  mode:  'development',
  output: {
    path: path.resolve(__dirname, 'dist_libs'),
    filename: 'waves_transactions.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    // libraryExport: 'default',
    library: 'waves_transactions'
  },

};
