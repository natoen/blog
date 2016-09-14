const webpack = require('webpack');


module.exports = {
  entry: [
    'babel-polyfill',
    './client/index.jsx',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'clientbundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['transform-object-rest-spread'],
        presets: ['react', 'es2015', 'stage-1'],
      },
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
