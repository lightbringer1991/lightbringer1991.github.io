const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8888';

const plugins = [
  new ExtractTextPlugin('css/styles.min.css'),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default'],
  }),
  new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
];

const entry = ['./src/js/main.jsx'];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      parallel: true,
      uglifyOptions: {
        output: {
          beautify: false,
        },
        compress: {
          warnings: false,
          drop_debugger: true, // jshint ignore:line
          drop_console: true, // jshint ignore:line
        },
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    })
  );
} else {
  entry.push(
    // activate HMR for React (needs to be before everything except polyfills)
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server and connect to the provided endpoint
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    // bundle the client for hot reloading, only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
  );
}

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'build/'),
    publicPath: '/build/',
    filename: 'js/main.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
          },
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      }
    ],
  },
  externals: {
    google: 'google',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    hot: true, // enable HMR on the server
  },
  plugins,
};
