const { resolve } = require('path');
const srcDir = resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    entry: `${srcDir}/index.js`,
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'standard-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }]
      
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${srcDir}/index.html`
        }),
        new DashboardPlugin()
    ]
};
