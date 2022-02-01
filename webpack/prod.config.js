const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')

const prod = merge(baseConfig, {
    mode: 'production',
    devtool: false,
    output: {
        publicPath: '/',
        filename: 'js/[name].[contenthash].bundle.js',
    },
    module: {
        rules: [
            // {
            //     test: /\.css?$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             // options: {
            //             //     importLoaders: 2,
            //             //     sourceMap: false,
            //             //     modules: false,
            //             // },
            //         },
            //     ],
            // },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 2,
            //                 sourceMap: false,
            //                 modules: false,
            //             },
            //         },
            //         // Compiles Sass to CSS
            //         "sass-loader",
            //     ],
            // },
        ],
    },
    plugins: [
        // Extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 100000,
            maxSize: 1000000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        // console.log('package', packageName);
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
})

// return console.log(prod);

module.exports = prod;