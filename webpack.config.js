const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, // Match CSS files
                use: ['style-loader', 'css-loader'], // Loaders for CSS
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Match image and SVG files
                type: 'asset/resource', // Emit files to the dist folder
            },
        ]
    }, mode: 'development'
}