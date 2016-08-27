const webpack = require('webpack');
const webpackclient = require('./webpack.client.config');
const webpackserver = require('./webpack.server.config');


module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webpack: {
      options: [webpackclient, webpackserver],
      build: {
        plugins: [
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false },
          }),
        ],
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      },
      dist: {
        files: {
          'clientbundle.min.js': ['clientbundle.js'],
          'serverbundle.min.js': ['serverbundle.js'],
        },
      },
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'client',
          src: ['style/style.css'],
          dest: 'client/',
          ext: '.min.css',
        }],
      },
    },

    watch: {
      scripts: {
        files: [
          'client/**/*.js*',
          'server/*.js*',
        ],
        tasks: [
          'webpack',
          'uglify',
        ],
      },
      css: {
        files: 'client/style/*.css',
        tasks: ['cssmin'],
      },
    },

    shell: {
      removeFiles: {
        command: 'rm *bundle.js',
        options: {
          stdout: true,
          stderr: true,
          failOnError: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['webpack', 'cssmin', 'uglify', 'shell']);
};
