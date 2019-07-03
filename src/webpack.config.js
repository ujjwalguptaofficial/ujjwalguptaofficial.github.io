const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
console.log('env', process.env.NODE_ENV);
// const folder = process.env.NODE_ENV == "production" ? "docs" : "dist
const folder = "dist"
module.exports = {
    entry: './src/app.js',
    devtool: 'source-map',
    mode: process.env.NODE_ENV == "production" ? "production" : "development",
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
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, `../${folder}/`)
    },
    plugins: [
        new CopyPlugin([{
            from: './src/img/',
            to: 'img/'
        }]),
        new HtmlWebpackPlugin({
            cache: true,
            hash: true,
            template: 'src/index.html',
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