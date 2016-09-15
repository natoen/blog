const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const client = {
  entry: {
    clientbundle: [
      'babel-polyfill',
      path.join(__dirname, 'client', 'style', 'style.css'),
      path.join(__dirname, 'client', 'index.jsx'),
    ],
  },
};

const server = {
  entry: {
    serverbundle: [path.join(__dirname, 'server', 'server.js')],
  },
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .concat(['react-dom/server'])
    .reduce((ext, mod) => Object.assign(ext, { [mod]: `commonjs ${mod}` })),
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  plugins: [],
};

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
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        properties: true,
        comparisons: true,
        evaluate: true,
        loops: true,
        hoist_funs: true,
        cascade: true,
        drop_debugger: true,
        unsafe: true,
        hoist_vars: true,
        negate_iife: true,
      },
      mangle: {
        toplevel: true,
        sort: true,
        eval: true,
        properties: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin('./client/style/style.min.css'),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

module.exports = [client, server].map(item => Object.assign({}, config, item));
