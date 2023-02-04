const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBarPlugin = require('webpackbar');
const aliasPath = require('./tsconfig.json').compilerOptions.paths;

module.exports = {
  entry: './src/main.ts',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '乐高积木',
      template: 'public/index.html'
    }),
    new WebpackBarPlugin()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: Object.keys(aliasPath).reduce((alias, key) => {
      const newKey = key.replace(/\/\*$/, '');
      let newPath = path.resolve(aliasPath[key][0]) + '';
      newPath = newPath.replace(/\/\*$/, '')
      alias[newKey] = newPath;
      return alias;
    }, {})
  },
  output: {
    filename: process.env.production ? `[name].[chunkHash].js` : `[name].[hash].js`,
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          "less-loader",
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },
};