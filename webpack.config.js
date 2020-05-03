const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: dev ? 'development' : 'production',
    context: path.join(__dirname, 'src'),
    devtool: dev ? 'inline-source-map' : 'none',
    entry: './index.js',
    resolve: {
        modules: [path.resolve('./src'), 'node_modules'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ]
};
