const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node-modules/,
                options: {
                    fix: true
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: isProd,
                        removeComments: isProd,
                        collapseWhitespace: isProd
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: 'babel-loader'
            }
        ],
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ]
    }
}