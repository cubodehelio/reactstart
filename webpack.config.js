module.exports = {
  entry: './example/app/index.jsx',
  output: {
    filename: './server/public/bundle.js'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.js' and '.jsx' as resolvable extensions.
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    loaders: [
      // All files with a '.jsx' extension will be handled by 'babel-loader'.
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        cacheDirectory: './wpcache',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume that the corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid any third party
  // dependencies to be bundled along side our source code. Also allows
  // browsers to cache those third party libraries.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'superagent': 'superagent',
    'debug': 'debug'
  }
};
