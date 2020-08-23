const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  resolve: { extensions: ['.ts', '.js'] },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: false,
    inline: false,
    host: '0.0.0.0',
  },
};
