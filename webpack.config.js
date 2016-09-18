const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');
const env = process.env.AWS_ACCESS_KEY_ID ? process.env : require('./env');


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
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

const client = {
  entry: {
    clientbundle: [
      'babel-polyfill',
      path.join(__dirname, 'client', 'style', 'style.css'),
      path.join(__dirname, 'client', 'index.jsx'),
    ],
  },
  plugins: config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
    }),
    new ExtractTextPlugin('style.min.css'),
    new S3Plugin({
      include: /(clientbundle|style)/,
      s3Options: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
        region: env.AWS_REGION,
      },
      s3UploadOptions: {
        Bucket: env.S3_BUCKET_NAME,
      },
    }),
  ]),
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
};

module.exports = [client, server].map(item => Object.assign({}, config, item));
