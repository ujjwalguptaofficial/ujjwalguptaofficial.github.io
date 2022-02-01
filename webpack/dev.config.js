const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
    devServer: {
        // static: {
        //     directory: path.join(__dirname, '..', 'public'),
        // },
        historyApiFallback: true,
    },
});