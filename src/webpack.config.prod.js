const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: "css-loader" // translates CSS into CommonJS
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.css', '.scss']
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, '../dist/')
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            cache: true,
            hash: true,
            template: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ]
};