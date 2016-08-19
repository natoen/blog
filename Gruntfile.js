const webpack = require('webpack');
const webpackoptions = require('./webpack.config.js');


module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webpack: {
      options: webpackoptions,
      watch: {
        watch: true,
        keepalive: true,
      },
      build: {
        plugins:
          [new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') },
          })],
      },
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
};
