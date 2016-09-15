module.exports = {

  app: {
    'index.html': 'example/app/index.html',
    'index.jsx': 'example/app/index.jsx'
  },

  vendor: {

    styles:
    [
    ],

    scripts:
    [
      'node_modules/react/dist/react.js',
      'node_modules/react/dist/react.min.js',
      'node_modules/react/dist/react-with-addons.js',
      'node_modules/react/dist/react-with-addons.min.js',
      'node_modules/react-dom/dist/react-dom.js',
      'node_modules/react-dom/dist/react-dom.min.js',
      'node_modules/remarkable/dist/remarkable.js',
      'node_modules/remarkable/dist/remarkable.min.js',
      'node_modules/superagent/superagent.js',
      'node_modules/debug/dist/debug.js'
    ],

    fonts:
    [
    ]
  },
  server: {
    port: 3003
  }
};
