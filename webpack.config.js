const sources = require('./grunt/sources.js');

/**
 * Webpack's configuration file.
 */
module.exports = {
  entry: `./${sources.app['index.jsx']}`,
  output: {
    filename: './example/server/public/bundle.js'
  },

  // Enable source-maps for debugging webpack's output.
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

  // In the example/ app all the needed third party libraries are loaded from
  // public public CDNs and are inclueded in the index.html as you normaly
  // would via <scrip> tag. This means that those libs creates his own global
  // variables (namespace) in the document. So here we instruct webpack to just
  // ignore the presence of this specific globals in our code.
  // Among other things this allows us to avoid any third party dependencies to
  // be bundled along side our source code.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'superagent': 'superagent'
  }
};
