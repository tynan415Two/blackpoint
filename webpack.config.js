const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })]
}