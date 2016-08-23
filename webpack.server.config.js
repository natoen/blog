const fs = require('fs');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './server/server.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'serverbundle.js',
  },
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .concat(['react-dom/server'])
    .reduce((ext, mod) => Object.assign(ext, { [mod]: `commonjs ${mod}` }), {}),
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['transform-object-rest-spread'],
        presets: ['react', 'es2015', 'stage-1'],
      },
    }],
  },
};
