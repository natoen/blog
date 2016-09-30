const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-object-rest-spread'],
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
    ],
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

const client = {
  entry: {
    clientbundle: [
      'babel-polyfill',
      path.join(`${__dirname}/..`, 'client', 'style', 'style.css'),
      path.join(`${__dirname}/..`, 'client', 'index.jsx'),
    ],
  },
  plugins: config.plugins.concat([
    new ExtractTextPlugin('style.min.css'),
  ]),
};

const server = {
  entry: {
    serverbundle: [path.join(`${__dirname}/..`, 'server', 'server.js')],
  },
  output: {
    path: `${__dirname}/..`,
    filename: '[name].js',
  },
  externals: fs.readdirSync(path.resolve(`${__dirname}/..`, 'node_modules'))
    .concat(['react-dom/server'])
    .reduce((ext, mod) => Object.assign(ext, { [mod]: `commonjs ${mod}` })),
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
};

module.exports = [client, server].map(item => Object.assign({}, config, item));
