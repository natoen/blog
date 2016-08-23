const webpack = require('webpack');
const webpackclient = require('./webpack.client.config');
const webpackserver = require('./webpack.server.config');


module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webpack: {
      options: [webpackclient, webpackserver],
      watch: {
        watch: true,
        keepalive: true,
      },
      build: {
        plugins: [
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false },
          }),
          new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') },
          })],
      },
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
};
