const path = require('path');
const MahalPlugin = require('mahal-webpack-loader/lib/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.mahal?$/,
                // loader: 'mahal-webpack-loader',
                use: {
                    loader: require.resolve('mahal-webpack-loader')
                },
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    {
                        loader: require.resolve('css-loader')
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.ts?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.mahal$/],
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.mahal', '.scss'],
        alias: {
            "~": path.join(__dirname),
            "@": path.join(__dirname, 'src'),
            "@config": path.join(__dirname, 'config'),
            "@components": path.join(__dirname, 'src', 'components')
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
    },
    output: {
        filename: 'bundles.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/'
    },
    plugins: [
        new MahalPlugin({
            lang: 'ts'
        }),
        new HtmlWebPackPlugin({
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