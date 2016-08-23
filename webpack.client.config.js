module.exports = {
  entry: [
    'babel-polyfill',
    './client/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'clientbundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['transform-object-rest-spread'],
        presets: ['react', 'es2015', 'stage-1'],
      },
    }],
  },
};