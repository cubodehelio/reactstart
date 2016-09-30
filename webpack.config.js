const config = require('./config.js');

/**
 * Webpack's configuration file.
 */
module.exports = {
  entry: `./${config.app['index.jsx']}`,
  output: {
    filename: config.bundleName
  },

  // Enable source-maps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.js' and '.jsx' as resolvable extensions.
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    loaders: [

      /**
       * JSX files will be handled by 'babel-loader'.
       */
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        cacheDirectory: './wpcache',
        query: {
          presets: ['es2015', 'react']
        }
      },

      /**
       * CSS files will be handled by 'css' & `style` loaders.
       * NOTE: The resulting css will be injected in the webpack output bunlde
       * javascript file. Then, it will be injected in your document via
       * <style> tag.
       */
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap'

      },

      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },

      {
        test: /\.sass$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
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
