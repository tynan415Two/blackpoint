const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].js',
        path: __dirname,
      },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }, 
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                    }
                ]
            }
    ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            favicon: './src/images/goldenGate.ico',
        }), 
        new MiniCssExtractPlugin(),
    ]
}